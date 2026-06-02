/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    pdfjsLib: any;
  }
}

export default function PdfFlipbook() {
  const [pdfjsLoaded, setPdfjsLoaded] = useState(false);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const canvasLeftRef = useRef<HTMLCanvasElement>(null);
  const canvasRightRef = useRef<HTMLCanvasElement>(null);
  const leftPageContainerRef = useRef<HTMLDivElement>(null);
  const rightPageContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Active rendering task references for canvas concurrency control
  const renderTaskLeftRef = useRef<any>(null);
  const renderTaskRightRef = useRef<any>(null);

  // Sync references to solve stale closures and concurrent renders in state timing
  const currentPageRef = useRef<number>(1);
  const isRenderingRef = useRef<boolean>(false);

  const pdfUrl = "/Hilton Price List 2018 new.pdf";

  // Check mobile width and handle resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keypresses inside input fields
      const activeEl = document.activeElement?.tagName;
      if (activeEl === "INPUT" || activeEl === "TEXTAREA") return;

      if (e.key === "ArrowRight") {
        nextPage();
      } else if (e.key === "ArrowLeft") {
        prevPage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pdfDoc, numPages, isMobile]);

  // Load PDF when PDF.js script finishes loading
  useEffect(() => {
    if (!pdfjsLoaded) return;

    const loadPdf = async () => {
      try {
        setLoading(true);
        setError(false);
        const pdfjsLib = window.pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/",
          cMapPacked: true,
        });

        const doc = await loadingTask.promise;
        setPdfDoc(doc);
        setNumPages(doc.numPages);
        setLoading(false);
      } catch (err) {
        console.error("Error loading PDF catalogue:", err);
        setError(true);
        setLoading(false);
      }
    };

    loadPdf();
  }, [pdfjsLoaded]);

  // Re-render pages ONLY when PDF loaded or layout mode (mobile vs desktop) shifts.
  // This avoids double-render conflicts when page numbers change.
  useEffect(() => {
    if (!pdfDoc) return;
    if (currentPageRef.current > numPages) {
      currentPageRef.current = numPages;
    }
    renderSpread();
  }, [pdfDoc, isMobile]);

  const renderPageToCanvas = async (
    pageNum: number | null,
    canvas: HTMLCanvasElement | null,
    container: HTMLDivElement | null,
    isLeft: boolean
  ) => {
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Cancel previous rendering task on this canvas if active to prevent multi-render canvas collisions
    const activeTaskRef = isLeft ? renderTaskLeftRef : renderTaskRightRef;
    if (activeTaskRef.current) {
      try {
        activeTaskRef.current.cancel();
      } catch {
        // Ignore cancellation errors
      }
      activeTaskRef.current = null;
    }

    if (pageNum === null || pageNum < 1 || pageNum > numPages) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = "none";
      return;
    }

    canvas.style.display = "block";

    try {
      const page = await pdfDoc.getPage(pageNum);
      const containerWidth = container.clientWidth || 420;
      const baseViewport = page.getViewport({ scale: 1.0 });
      const dynamicScale = containerWidth / baseViewport.width;
      const viewport = page.getViewport({ scale: dynamicScale * 1.5 }); // High-DPI scaling

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      // 2. Start rendering task and store reference
      const renderTask = page.render(renderContext);
      activeTaskRef.current = renderTask;

      await renderTask.promise;

      // 3. Reset task reference on completion
      activeTaskRef.current = null;
    } catch (err: any) {
      // PDF.js throws a RenderingCancelledException when render is cancelled, which we safely ignore
      if (err && err.name === "RenderingCancelledException") {
        return;
      }
      console.error(`Error rendering page ${pageNum}:`, err);
    }
  };

  const renderSpread = async () => {
    if (!pdfDoc || isRenderingRef.current) return;
    isRenderingRef.current = true;
    setIsRendering(true);

    const pNum = currentPageRef.current;

    let leftPageNum: number | null = null;
    let rightPageNum: number | null = null;

    if (isMobile) {
      leftPageNum = null;
      rightPageNum = pNum;
    } else {
      if (pNum === 1) {
        leftPageNum = null;
        rightPageNum = 1;
      } else {
        leftPageNum = pNum % 2 === 0 ? pNum : pNum - 1;
        rightPageNum = leftPageNum + 1;
      }
    }

    const safeLeft = leftPageNum && leftPageNum <= numPages ? leftPageNum : null;
    const safeRight = rightPageNum && rightPageNum <= numPages ? rightPageNum : null;

    await Promise.all([
      renderPageToCanvas(safeLeft, canvasLeftRef.current, leftPageContainerRef.current, true),
      renderPageToCanvas(safeRight, canvasRightRef.current, rightPageContainerRef.current, false),
    ]);

    setCurrentPage(pNum); // Update public display state to match ref
    isRenderingRef.current = false;
    setIsRendering(false);
  };

  const triggerFlipAnimation = (direction: "next" | "prev") => {
    const overlay = overlayRef.current;
    if (!overlay || isMobile) {
      renderSpread();
      return;
    }

    overlay.className = "flip-overlay";
    overlay.classList.add(direction === "next" ? "turn-right" : "turn-left");
    void overlay.offsetWidth; // Force reflow
    overlay.classList.add(direction === "next" ? "animate-turn-right" : "animate-turn-left");

    setTimeout(() => {
      renderSpread();
    }, 250);

    setTimeout(() => {
      if (overlay) overlay.className = "flip-overlay";
    }, 520);
  };

  const nextPage = () => {
    if (!pdfDoc || isRenderingRef.current) return;

    let targetPage = currentPageRef.current;
    if (isMobile) {
      if (currentPageRef.current >= numPages) return;
      targetPage = currentPageRef.current + 1;
    } else {
      if (currentPageRef.current === 1) {
        targetPage = 2;
      } else {
        const nextLeft = currentPageRef.current % 2 === 0 ? currentPageRef.current + 2 : currentPageRef.current + 1;
        if (nextLeft > numPages) return;
        targetPage = nextLeft;
      }
    }

    currentPageRef.current = targetPage;
    triggerFlipAnimation("next");
  };

  const prevPage = () => {
    if (!pdfDoc || isRenderingRef.current || currentPageRef.current === 1) return;

    let targetPage = currentPageRef.current;
    if (isMobile) {
      targetPage = Math.max(1, currentPageRef.current - 1);
    } else {
      if (currentPageRef.current <= 3) {
        targetPage = 1;
      } else {
        targetPage = currentPageRef.current % 2 === 0 ? currentPageRef.current - 2 : currentPageRef.current - 3;
      }
    }

    currentPageRef.current = targetPage;
    triggerFlipAnimation("prev");
  };

  const firstPage = () => {
    if (!pdfDoc || isRenderingRef.current || currentPageRef.current === 1) return;
    currentPageRef.current = 1;
    triggerFlipAnimation("prev");
  };

  const lastPage = () => {
    if (!pdfDoc || isRenderingRef.current) return;

    let targetPage = currentPageRef.current;
    if (isMobile) {
      targetPage = numPages;
    } else {
      const lastLeft = numPages % 2 === 0 ? numPages : numPages - 1;
      targetPage = Math.max(1, lastLeft);
    }
    currentPageRef.current = targetPage;
    triggerFlipAnimation("next");
  };

  const getPageIndicatorText = () => {
    if (!pdfDoc) return "Loading...";

    if (isMobile) {
      return `Page ${currentPage} of ${numPages}`;
    }

    if (currentPage === 1) {
      return `Cover (1 of ${numPages})`;
    }

    const leftNum = currentPage % 2 === 0 ? currentPage : currentPage - 1;
    const rightNum = leftNum + 1;
    const safeLeft = leftNum <= numPages ? leftNum : null;
    const safeRight = rightNum <= numPages ? rightNum : null;

    if (safeLeft && safeRight) {
      return `Pages ${safeLeft} – ${safeRight}`;
    }
    return safeLeft ? `Page ${safeLeft}` : `Page ${safeRight}`;
  };

  // State calculations for disabled buttons
  const isFirstDisabled = currentPage === 1 || loading || error || isRendering;
  const isNextDisabled = () => {
    if (!pdfDoc || loading || error || isRendering) return true;
    if (isMobile) {
      return currentPage >= numPages;
    }
    const maxPageOnSpread =
      currentPage === 1
        ? 1
        : currentPage % 2 === 0
        ? currentPage + 1
        : currentPage;
    return maxPageOnSpread >= numPages;
  };

  return (
    <>
      {/* CDN Script Loader for PDF.js library */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
        onLoad={() => setPdfjsLoaded(true)}
        strategy="afterInteractive"
      />

      <section className="py-section-gap-desktop bg-surface font-body" id="digital-catalog">
        <div className="max-w-7xl mx-auto px-4 md:px-grid-margin-desktop">
          {/* Section Headers */}
          <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-headline">
              Official Catalogue
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-on-surface">
              Interactive Price List &amp; Specs
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Turn pages dynamically to browse our official catalogue, pipe sizing matrices, structural fittings, and detailed PTMT bathroom layouts.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto bg-surface-white border border-outline-variant/15 rounded-lg shadow-xl overflow-hidden p-6 sm:p-8">
            {/* 1. Loading Spinner State */}
            {loading && (
              <div className="flex flex-col items-center justify-center min-h-[350px] space-y-4 py-12">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs sm:text-sm text-on-surface-variant font-medium">
                  Loading catalog book pages...
                </p>
              </div>
            )}

            {/* 2. Error Fallback State */}
            {error && (
              <div className="flex flex-col items-center justify-center min-h-[350px] space-y-6 text-center max-w-md mx-auto py-12">
                <span className="material-symbols-outlined text-accent text-[48px]">warning</span>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-headline text-on-surface">
                    Could Not Load PDF Catalogue
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    We encountered an issue rendering the flipbook document. You can still download the complete PDF or view it directly in your browser.
                  </p>
                </div>
                <a
                  href={pdfUrl}
                  target="_blank"
                  className="bg-primary text-surface-white px-6 py-3 rounded font-headline font-bold text-xs hover:bg-primary-dark transition-colors shadow flex items-center gap-2"
                >
                  Open PDF Directly
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            )}

            {!loading && !error && pdfDoc && (
              <div className="flex flex-col items-center space-y-8 select-none w-full">
                {/* 3D Spreads Wrapper */}
                <div className="book-wrap" id="bookWrap">
                  {/* Left Page Column (hidden on mobile and cover page) */}
                  <div
                    className={`book-page-wrap book-page-left ${
                      isMobile || currentPage === 1 ? "hidden" : ""
                    }`}
                  >
                    <div
                      ref={leftPageContainerRef}
                      className="book-page-inner"
                      id="leftPageInner"
                    >
                      <canvas ref={canvasLeftRef} id="canvasLeft" />
                      <div className="page-shadow page-shadow-right" />
                    </div>
                    <div className="page-label" id="labelLeft">
                      {currentPage === 1 ? "" : `Page ${currentPage % 2 === 0 ? currentPage : currentPage - 1}`}
                    </div>
                  </div>

                  {/* Book Spine Divider */}
                  {!isMobile && currentPage > 1 && (
                    <div className="book-spine" />
                  )}

                  {/* Right Page Column */}
                  <div className="book-page-wrap book-page-right">
                    <div
                      ref={rightPageContainerRef}
                      className="book-page-inner"
                      id="rightPageInner"
                    >
                      <canvas ref={canvasRightRef} id="canvasRight" />
                      <div className="page-shadow page-shadow-left" />
                    </div>
                    <div className="page-label" id="labelRight">
                      {isMobile
                        ? `Page ${currentPage}`
                        : currentPage === 1
                        ? "Cover"
                        : currentPage % 2 === 0
                        ? `Page ${currentPage + 1}`
                        : `Page ${currentPage}`}
                    </div>
                  </div>

                  {/* Animate overlay screen */}
                  <div ref={overlayRef} className="flip-overlay" id="flipOverlay"></div>
                </div>

                {/* Flipbook Bottom Controls */}
                <div className="flex flex-col items-center gap-4 w-full pt-4 border-t border-outline-variant/10">
                  <div className="flex justify-center items-center gap-2 sm:gap-4 w-full">
                    {/* First Page */}
                    <button
                      onClick={firstPage}
                      disabled={isFirstDisabled}
                      className="w-10 h-10 rounded border border-outline-variant/40 bg-surface-white flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors cursor-pointer focus:outline-none disabled:opacity-40 disabled:pointer-events-none"
                      title="First Page"
                    >
                      <span className="material-symbols-outlined">first_page</span>
                    </button>

                    {/* Prev Page */}
                    <button
                      onClick={prevPage}
                      disabled={isFirstDisabled}
                      className="w-10 h-10 rounded border border-outline-variant/40 bg-surface-white flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors cursor-pointer focus:outline-none disabled:opacity-40 disabled:pointer-events-none"
                      title="Previous Page"
                    >
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>

                    {/* Page Indicator Badge */}
                    <div className="px-4 py-2 rounded bg-surface border border-outline-variant/20 text-xs sm:text-sm font-headline font-extrabold text-on-surface shrink-0">
                      {getPageIndicatorText()}
                    </div>

                    {/* Next Page */}
                    <button
                      onClick={nextPage}
                      disabled={isNextDisabled()}
                      className="w-10 h-10 rounded border border-outline-variant/40 bg-surface-white flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors cursor-pointer focus:outline-none disabled:opacity-40 disabled:pointer-events-none"
                      title="Next Page"
                    >
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>

                    {/* Last Page */}
                    <button
                      onClick={lastPage}
                      disabled={isNextDisabled()}
                      className="w-10 h-10 rounded border border-outline-variant/40 bg-surface-white flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors cursor-pointer focus:outline-none disabled:opacity-40 disabled:pointer-events-none"
                      title="Last Page"
                    >
                      <span className="material-symbols-outlined">last_page</span>
                    </button>

                    {/* Direct PDF Download Button */}
                    <a
                      href={pdfUrl}
                      download
                      className="w-10 h-10 rounded border border-outline-variant/40 bg-surface-white flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors focus:outline-none"
                      title="Download Catalogue PDF"
                    >
                      <span className="material-symbols-outlined">download</span>
                    </a>
                  </div>

                  <p className="text-[10px] text-on-surface-variant leading-none opacity-80 select-none">
                    Use left / right keyboard arrow keys or tap buttons to turn pages.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

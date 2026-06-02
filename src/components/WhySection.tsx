"use client";

import React from "react";

export default function WhySection() {
  const points = [
    {
      num: "01",
      title: "Direct Factory Pricing",
      desc: "No middlemen. You deal directly with the manufacturer for bulk procurement, ensuring competitive pricing on every order.",
    },
    {
      num: "02",
      title: "Comprehensive Range",
      desc: "391 products across 5 categories under one roof — from 15MM domestic fittings to 250MM industrial bore components.",
    },
    {
      num: "03",
      title: "ISO 9001:2008 Certified",
      desc: "Every product manufactured using certified processes with industry-standard PP, CPVC, and UPVC grades — backed by our 30-year reputation.",
    },
    {
      num: "04",
      title: "Agricultural Specialists",
      desc: "Extensive agri-irrigation range including UV-stabilized foot valves, rain pipe systems, venturi sets, and drip hardware.",
    },
    {
      num: "05",
      title: "Pan-India Logistics",
      desc: "Based in Ahmedabad&apos;s industrial corridor with established freight partnerships for reliable delivery across India.",
    },
    {
      num: "06",
      title: "Responsive Support",
      desc: "Direct access to our procurement team. Call Bharatbhai or Vishnubhai for immediate bulk quotations and technical specifications.",
    },
  ];

  return (
    <section className="py-section-gap-desktop bg-surface font-body border-t border-b border-outline-variant/10" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 md:px-grid-margin-desktop">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary font-headline">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-on-surface">
            The Hilton Plastic Advantage
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Over three decades of manufacturing excellence, certified quality standards, and dedicated distributor relationships make us India&apos;s dependable polymer fittings partner.
          </p>
        </div>

        {/* 6-Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-grid-gutter">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="group bento-card bg-surface-white border border-outline-variant/15 rounded-lg p-6 sm:p-8 flex flex-col items-start gap-4 text-left shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Numeric indicator badge */}
              <div className="text-3xl font-extrabold font-headline text-primary bg-primary/5 border border-primary/10 w-12 h-12 rounded flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-surface-white select-none">
                {p.num}
              </div>

              {/* Text detail block */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold font-headline text-on-surface group-hover:text-primary transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

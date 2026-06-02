"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section className="py-section-gap-desktop bg-surface-white font-body" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-grid-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content column */}
          <div className="space-y-8 lg:col-span-7 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-headline">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-on-surface leading-tight">
                Three Decades of <br />
                Polymer Precision.
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Founded in 1994, Hilton Plastic has grown from a modest moulding unit in Ahmedabad to one of Gujarat&apos;s most dependable plastic fitting manufacturers. Our factory runs high-performance polymer processing loops engineered for consistency, producing everything from agricultural drip irrigation components to heavy-duty industrial pipeline systems.
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Every product leaving our facility is manufactured using ISO 9001:2008 certified processes with industry-standard PP, CPVC, UPVC and Rigid PVC grades. UV-stabilized formulations across our agricultural range ensure field longevity even under prolonged exposure.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Pillar 1 */}
              <div className="flex gap-4 items-start p-4 bg-surface rounded-md border border-outline-variant/10 hover:border-primary/20 transition-all duration-200">
                <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[20px] font-bold">star</span>
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm text-on-surface font-headline font-bold">
                    ISO 9001:2008 Certified
                  </strong>
                  <span className="block text-[11px] sm:text-xs text-on-surface-variant mt-1 leading-relaxed">
                    PP, CPVC &amp; UPVC grade materials. Every batch tested for grade integrity before production.
                  </span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-4 items-start p-4 bg-surface rounded-md border border-outline-variant/10 hover:border-primary/20 transition-all duration-200">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px] font-bold">location_on</span>
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm text-on-surface font-headline font-bold">
                    Ahmedabad, Gujarat
                  </strong>
                  <span className="block text-[11px] sm:text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Centrally located in Rakhiyal GIDC for efficient pan-India logistics and distribution.
                  </span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex gap-4 items-start p-4 bg-surface rounded-md border border-outline-variant/10 hover:border-primary/20 transition-all duration-200">
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <span className="material-symbols-outlined text-[20px] font-bold">verified_user</span>
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm text-on-surface font-headline font-bold">
                    Quality Controlled
                  </strong>
                  <span className="block text-[11px] sm:text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Multi-stage inspection across sizing, wall thickness, and pressure rating criteria.
                  </span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="flex gap-4 items-start p-4 bg-surface rounded-md border border-outline-variant/10 hover:border-primary/20 transition-all duration-200">
                <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[20px] font-bold">width</span>
                </div>
                <div>
                  <strong className="block text-xs sm:text-sm text-on-surface font-headline font-bold">
                    Wide Size Range
                  </strong>
                  <span className="block text-[11px] sm:text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Fittings available from 15MM up to 250MM bore, covering all standard pipe dimensions.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual/Stats column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] bg-primary text-surface-white rounded-lg p-8 shadow-xl flex flex-col justify-between items-start gap-8 relative overflow-hidden group">
              {/* Geometric brand background graphic overlay */}
              <div className="absolute right-[-15%] top-[-10%] opacity-15 w-[200px] h-[200px] rotate-12 bg-white rounded-xl -z-0"></div>

              <div className="space-y-2 z-10">
                <div className="text-4xl sm:text-5xl font-extrabold font-headline tracking-tight">1994</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-secondary-container">
                  Year Founded
                </div>
              </div>

              <div className="w-full h-[1px] bg-surface-white/20 z-10"></div>

              <div className="grid grid-cols-2 gap-6 w-full z-10">
                <div className="space-y-1">
                  <div className="text-3xl font-bold font-headline">30+</div>
                  <div className="text-[10px] opacity-75 font-semibold uppercase tracking-wider">
                    Years Active
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold font-headline">391+</div>
                  <div className="text-[10px] opacity-75 font-semibold uppercase tracking-wider">
                    Product SKUs
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-surface-white/20 z-10"></div>

              <div className="flex items-center gap-3 z-10">
                <span className="material-symbols-outlined text-secondary text-[24px] shrink-0">
                  workspace_premium
                </span>
                <span className="text-[11px] leading-snug font-medium opacity-90">
                  ISO 9001:2008 Certified Polymer Moulding Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

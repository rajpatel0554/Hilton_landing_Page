"use client";

import React, { useState } from "react";
import { triggerEmailInquiry } from "../utils/email";

export default function InquirySection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const sanitizeInput = (text: string): string => {
    return text
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: { name?: string; phone?: string } = {};

    if (!name.trim()) {
      tempErrors.name = "Company / Name is required.";
    }
    if (!phone.trim()) {
      tempErrors.phone = "Contact phone number is required.";
    } else if (!/^\+?[0-9\s\-()]{8,15}$/.test(phone.trim())) {
      tempErrors.phone = "Please enter a valid phone number.";
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setErrors({});

    const cleanName = sanitizeInput(name.trim());
    const cleanPhone = sanitizeInput(phone.trim());
    const cleanRequirements = sanitizeInput(requirements.trim());

    // Process mailto link pre-fill
    const body = `Hello Hilton Plastic,\n\nName / Company: ${cleanName}\nPhone: ${cleanPhone}\n\nRequirements / Message:\n${
      cleanRequirements || "Not specified"
    }\n\nPlease contact me back with pricing, catalogs, and availability.\n\nThank you.`;
    const subject = `Bulk Procurement Inquiry from ${cleanName}`;

    triggerEmailInquiry(subject, body);
  };

  return (
    <section className="py-section-gap-desktop bg-mesh relative overflow-hidden font-body scroll-mt-20" id="contact">
      {/* Background glow graphics */}
      <div className="absolute right-[-10%] top-[-10%] opacity-5 w-[350px] h-[350px] rotate-12 rounded-full bg-primary/20 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-grid-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Support Desk details */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-headline">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-on-surface leading-tight">
                Ready to Place a <br />
                Bulk Order?
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Contact our procurement desk directly for quotations, product specifications, or logistics coordination. We respond within one business day.
              </p>
            </div>

            {/* Contact cards lists */}
            <div className="space-y-4 max-w-lg">
              {/* Sales Support */}
              <a
                href="tel:+919624096424"
                className="group flex items-center justify-between p-4 bg-surface-white border border-outline-variant/15 hover:border-primary/20 rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-11 h-11 rounded bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px] font-bold">phone_in_talk</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider leading-none">
                      Patel Bharatbhai 
                    </span>
                    <strong className="block text-sm sm:text-base text-on-surface font-headline font-bold mt-1.5 group-hover:text-primary transition-colors leading-none">
                      +91 96240 96424
                    </strong>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>

              {/* Ops Support */}
              <a
                href="tel:+919824096423"
                className="group flex items-center justify-between p-4 bg-surface-white border border-outline-variant/15 hover:border-primary/20 rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-11 h-11 rounded bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px] font-bold">phone_in_talk</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider leading-none">
                      Patel Vishnubhai 
                    </span>
                    <strong className="block text-sm sm:text-base text-on-surface font-headline font-bold mt-1.5 group-hover:text-primary transition-colors leading-none">
                      +91 98240 96423
                    </strong>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>

              {/* Email Support */}
              <a
                href="mailto:hiltonplasticvalve1993@gmail.com"
                onClick={(e) => {
                  e.preventDefault();
                  triggerEmailInquiry("Procurement Inquiry", "Hello Hilton Plastic,\n\n");
                }}
                className="group flex items-center justify-between p-4 bg-surface-white border border-outline-variant/15 hover:border-primary/20 rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-11 h-11 rounded bg-accent/10 flex items-center justify-center text-accent">
                    <span className="material-symbols-outlined text-[22px] font-bold">mail</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider leading-none">
                      Email — Bulk Inquiries
                    </span>
                    <strong className="block text-sm sm:text-base text-on-surface font-headline font-bold mt-1.5 group-hover:text-primary transition-colors leading-none truncate max-w-[220px] sm:max-w-none">
                      hiltonplasticvalve1993@gmail.com
                    </strong>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>

              {/* Factory Address */}
              <div
                className="group flex items-center p-4 bg-surface-white border border-outline-variant/15 rounded-lg shadow-sm"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-11 h-11 rounded bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px] font-bold">location_on</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-wider leading-none">
                      Factory Address
                    </span>
                    <strong className="block text-xs sm:text-sm text-on-surface font-headline font-bold mt-1.5 leading-tight">
                      Rakhiyal, Ahmedabad, Gujarat — 380 023, India
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Intake Form card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-surface-white border border-outline-variant/15 rounded-lg shadow-xl p-6 sm:p-8 text-left">
              <h3 className="text-base sm:text-lg font-bold font-headline text-on-surface border-b border-outline-variant/10 pb-4 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">assignment_turned_in</span>
                Send Quick Inquiry
              </h3>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                {/* Input: Name */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant font-headline">
                    Your Name / Company Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Enterprises, Surat"
                    className={`w-full px-3.5 py-2.5 bg-surface rounded border outline-none text-xs sm:text-sm font-medium transition-all ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 bg-red-50/10"
                        : "border-outline-variant focus:border-primary"
                    }`}
                  />
                  {errors.name && (
                    <span className="block text-[10px] font-bold text-red-500 font-headline pt-0.5">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Input: Phone */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant font-headline">
                    Phone / Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-3.5 py-2.5 bg-surface rounded border outline-none text-xs sm:text-sm font-medium transition-all ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500 bg-red-50/10"
                        : "border-outline-variant focus:border-primary"
                    }`}
                  />
                  {errors.phone && (
                    <span className="block text-[10px] font-bold text-red-500 font-headline pt-0.5">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Input: Requirements Message */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant font-headline">
                    Product Specifications / Message
                  </label>
                  <textarea
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder='e.g., 500 pcs Ball Valve 1/2", 100 pcs Foot Valve 50MM...'
                    rows={4}
                    className="w-full px-3.5 py-2.5 bg-surface border border-outline-variant focus:border-primary rounded outline-none text-xs sm:text-sm font-medium transition-all resize-none"
                  />
                </div>

                {/* Submit Trigger Button */}
                <button
                  type="submit"
                  className="w-full text-center bg-primary text-surface-white py-3.5 rounded font-headline font-bold text-xs sm:text-sm hover:bg-primary-dark transition-colors shadow-sm focus:outline-none flex items-center justify-center gap-2 cursor-pointer pt-3 active:scale-95 duration-200"
                >
                  Send Inquiry via Email
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                </button>

                <p className="text-[10px] text-on-surface-variant leading-relaxed text-center opacity-85 select-none pt-2">
                  Clicking will automatically compile your details and launch your default email client pre-addressed to info support.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryShowcase from "../components/CategoryShowcase";
import AboutSection from "../components/AboutSection";
import PdfFlipbook from "../components/PdfFlipbook";
import WhySection from "../components/WhySection";
import ProductCatalog from "../components/ProductCatalog";
import InquirySection from "../components/InquirySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 2. Hero Header Introduction */}
        <Hero />

        {/* 3. Five Core Categories Showcase with Dynamic Counts */}
        <CategoryShowcase />

        {/* 4. Three Decades Story and Pillars Section */}
        <AboutSection />

        {/* 5. Official PDF Flipbook & Specifications */}
        <PdfFlipbook />

        {/* 6. Full Product Directory Finder with Filters & Search */}
        <ProductCatalog />

        {/* 7. Why Choose Us: The Hilton Plastic Advantage */}
        <WhySection />

        {/* 8. Intake Inquiry Wizard Form and Sales Hotline desks */}
        <InquirySection />
      </main>

      {/* 9. Corporate Footer */}
      <Footer />
    </div>
  );
}

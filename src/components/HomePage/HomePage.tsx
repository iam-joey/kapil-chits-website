"use client";
import React from "react";
import ImageCarousel from "./Carosuel";
import Features from "./Features";
import { Testimonals } from "./Testimonals";
import ContactForm from "./Contact";
import Faq from "./Faq";
import Footer from "./Footer";
import WhatsApp from "./WhatsApp";

function HomePage() {
  return (
    <div className="relative">
      <ImageCarousel />
      <Features />
      <Testimonals />
      <Faq />
      <ContactForm />
      <Footer />
      <WhatsApp />
    </div>
  );
}

export default HomePage;

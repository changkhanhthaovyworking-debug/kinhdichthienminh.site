/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CTABanner from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import ContactModal from "./components/ContactModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="bg-decoration" />
      <div className="ink-wash" />
      
      <Header onContactClick={openModal} />
      <main className="flex-grow">
        <Hero onContactClick={openModal} />
        <About />
        <Services onContactClick={openModal} />
        <CTABanner onContactClick={openModal} />
        <Testimonials />
      </main>
      <Footer />
      <FloatingContact />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

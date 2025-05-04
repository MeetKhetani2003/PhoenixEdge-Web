import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

function FooterMolecuel() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">PhoenixEdge</h2>
          <p className="text-sm text-gray-400">Building digital solutions for the future.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><Facebook size={20} className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Twitter size={20} className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Linkedin size={20} className="text-gray-400 hover:text-white" /></a>
            <a href="#"><Instagram size={20} className="text-gray-400 hover:text-white" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-2 bg-gray-800 text-white border border-gray-700"
            />
            <button type="submit" className="w-full p-2 bg-primary hover:bg-primary/90 text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} PhoenixEdge. All rights reserved.
      </div>
    </footer>
  );
}

export default FooterMolecuel;

import { useState } from "react";
import { Search } from "lucide-react";
import LinkAtom from "@/components/Atoms/LinkAtom";
import ButtonAtom from "@/components/Atoms/ButtonAtom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
  { href: "/service", label: "Service" },
  { href: "/team", label: "Team" },
];

function NavbarMolecuel() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-white py-4 px-6 md:px-12 lg:px-20 shadow-sm">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">

        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="ml-2 text-xl font-bold text-blue-950">Phoenix Edge</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <LinkAtom label={link.label} href={link.href} className="nav-link text-gray-700 font-medium hover:text-primary transition-colors"/>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
          </button>

          <ButtonAtom label="GET STARTED" variant="outline"/>

          <button 
            className="md:hidden text-gray-600 hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pt-4 pb-3 space-y-1`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block py-2 px-3 text-gray-700 hover:bg-primary hover:text-white rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </nav>
  )
}

export default NavbarMolecuel
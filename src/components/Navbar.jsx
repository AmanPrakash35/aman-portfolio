import React from "react";
import { Menu, X } from "lucide-react";

function Navbar({ navItems, isMenuOpen, onToggleMenu, onNavClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Aman</h1>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavClick(item)}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={onToggleMenu}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavClick(item)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-20 border-t shadow-sm">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-8">
        <p className="text-lg font-medium tracking-wide">
          &copy; 2024 All Rights Reserved
        </p>

        <div className="flex items-center gap-6 text-base">
          <a
            href="#"
            className="transition-transform duration-200 hover:scale-105"
          >
            Privacy
          </a>

          <a
            href="#"
            className="transition-transform duration-200 hover:scale-105"
          >
            Terms
          </a>

          <a
            href="#"
            className="transition-transform duration-200 hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
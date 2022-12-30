import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <BsFillCartFill size="2rem" />
        </div>
        <div className="hidden md:flex space-x-14 ">
          <a href="#" className="hover:text-neutral-500">
            Pricing
          </a>
          <a href="#" className="hover:text-neutral-500">
            Pricing
          </a>
          <a href="#" className="hover:text-neutral-500">
            Pricing
          </a>
          <a href="#" className="hover:text-neutral-500">
            Pricing
          </a>
          <a href="#" className="hover:text-neutral-500">
            Pricing
          </a>
        </div>
        <a className="p-3 px-10 pt-2 text-white bg-red-500 rounded-full hover:pointer ">
          Button
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

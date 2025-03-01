import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-scroll';
import { navItems } from "../constants";
import logo from "../assets/webmarket-logo.png";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { SignedOut, SignedIn, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
  const toggleNavbar = () => {
    if (!mobileDrawerOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 bg-n-7 z-10">
      <div className="px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center text-center">
          <div className="flex items-center flex-shrink-0">
            <img className="w-[5rem]" src={logo} alt="" />
            <span className="text-2xl font-medium tracking-tight">WebMarket</span>
          </div>
          <ul className="hidden lg:flex space-x-12 uppercase tracking-wider">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.id} 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-neutral-400 hover:text-neutral-50 hover:border-b transition text-center duration-150 font-source-code-pro cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="hidden items-center lg:flex gap-4">
          <SignedOut>
            <a href="/sign-up" className="uppercase text-neutral-400 hover:text-neutral-50 transition duration-150 font-source-code-pro font-semibold tracking-wider">
              New Account
            </a>
            <a href="/sign-in" className="uppercase text-neutral-400 hover:text-neutral-50 transition duration-150 font-source-code-pro font-semibold tracking-wider">
              Sign in
            </a>
          </SignedOut>
          <SignedIn>
            <div className="hidden lg:flex mr-[5rem]">
              <UserButton />
            </div>
          </SignedIn>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 2-20 bg-n-7 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-center uppercase tracking-wide">
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-neutral-400 hover:text-neutral-50 transition duration-250 font-source-code-pro text-base cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-8 gap-4">
              <SignedOut>
              <a href="/sign-up" className="uppercase border-b text-neutral-400 hover:text-neutral-50 transition duration-250 font-source-code-pro font-semibold tracking-wider">
                New Account
              </a>
              <a href="/sign-in" className="uppercase border-b text-neutral-400 hover:text-neutral-50 transition duration-250 font-source-code-pro font-semibold tracking-wider">
                Sign in
              </a>
              </SignedOut>
              <SignedIn>
               <UserButton className="lg:hidden md:flex"/>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

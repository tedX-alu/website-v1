"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import Logo from "/public/images/tedxicon.png";
import { Button } from "antd";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="flex max-sm:hidden">
      <nav className="flex w-full justify-between items-center px-4">
        <div className="flex items-center" onClick={() => handleNavigation("/")}>
          <Image src={Logo} width={80} alt="logo" />
          <span className="text-2xl">ALURwanda</span>
        </div>
        <div className="flex items-center space-x-12">
          <span
            className={`nav-link ${pathname === "/" ? "text-red-500" : "text-gray-800 hover:text-red-500 cursor-pointer"}`}
            onClick={() => handleNavigation("/")}
          >
            Home
          </span>
          <span
            className={`nav-link ${pathname === "/about" ? "text-red-500" : "text-gray-800 hover:text-red-500 cursor-pointer"}`}
            onClick={() => handleNavigation("/about")}
          >
            About Us
          </span>
          <span
            className={`nav-link ${pathname === "/events" ? "text-red-500" : "text-gray-800 hover:text-red-500 cursor-pointer"}`}
            onClick={() => handleNavigation("/events")}
          >
            Events
          </span>
          <span
            className={`nav-link ${pathname === "/partners" ? "text-red-500" : "text-gray-800 hover:text-red-500 cursor-pointer"}`}
            onClick={() => handleNavigation("/partners")}
          >
            Partners
          </span>
          <span
            className={`nav-link ${pathname === "/contact" ? "text-red-500" : "text-gray-800 hover:text-red-500 cursor-pointer"}`}
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </span>
        </div>
        <Button type="primary" danger>Buy Ticket</Button>
      </nav>
    </section>
  );
};

export default NavBar;
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "/public/images/tedxicon.png";
import { Button } from "antd";

const NavBar = () => {
  return (
    <section className="flex max-sm:hidden">
      <nav className="flex w-full">
        <Link className="flex items-center" href={"/"}>
          <Image src={Logo} width={80} alt="logo" />
          <span className="text-2xl">ALURwanda</span>
        </Link>
      </nav>
    </section>
  );
};

export default NavBar;

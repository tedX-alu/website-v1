"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import Logo from "/public/images/tedxicon.png";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link";

// const NavBar = () => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleNavigation = (path: string) => {
//     router.push(path);
//   };

//   return (
//     <section className="flex max-sm:hidden text-4xl">
//       <nav className="flex w-full justify-between items-center px-4">
//         <div className="flex items-center" onClick={() => handleNavigation("/")}>
        
//           <span className="text-2xl">ALURwanda</span>
//         </div>
//         <div className="flex items-center space-x-12">
//           <span
//             className={`nav-link ${pathname === "/" ? "text-red-500" : "text-gray-800 hover:text-red-500 cursor-pointer"}`}
//             onClick={() => handleNavigation("/")}
//           >
//             Home
//           </span>
//           <span
//             className={`nav-link ${pathname === "/about" ? "text-red-500" : "text-gray-800 hover:text-red-500 cursor-pointer"}`}
//             onClick={() => handleNavigation("/about")}
//           >
//             About Us
//           </span>
//           <span
//             className={`nav-link ${pathname === "/events" ? "text-red-500" : "text-gray-800 hover:text-red-500 cursor-pointer"}`}
//             onClick={() => handleNavigation("/events")}
//           >
//             Events
//           </span>
//           <span
//             className={`nav-link ${pathname === "/partners" ? "text-red-500" : "text-gray-800 hover:text-red-500 cursor-pointer"}`}
//             onClick={() => handleNavigation("/partners")}
//           >
//             Partners
//           </span>
//           <span
//             className={`nav-link ${pathname === "/contact" ? "text-red-500" : "text-gray-800 hover:text-red-500 cursor-pointer"}`}
//             onClick={() => handleNavigation("/contact")}
//           >
//             Contact
//           </span>
//         </div>
//         <Button type="primary" danger>Buy Ticket</Button>
//       </nav>
//     </section>
//   );
// };

// export default NavBar;


export default function Component() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold" href="/">
        <Image src={Logo} width={80} alt="logo" />
          
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full dark:before:bg-gray-50"
            href="/"
          >
            Home
          </Link>
          <Link
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full dark:before:bg-gray-50"
            href="/about"
          >
            About
          </Link>
          <Link
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full dark:before:bg-gray-50"
            href="/"
          >
            Events
          </Link>
          <Link
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full dark:before:bg-gray-50"
            href="/events"
          >
            Contact
          </Link>
          <Button className="hidden lg:inline-flex " size="sm" variant="default">
            Buy Ticket
          </Button>
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-6">
                <Link className={`flex items-center justify-between gap-2 text-lg font-semibold ${pathname === "/" ? "text-red-500" : "text-gray-800 hover:text-red-500 cursor-pointer"}`} href="#">
                  Home
                  <ChevronRightIcon className="h-5 w-5" />
                </Link>
                <Link className="flex items-center justify-between gap-2 text-lg font-semibold" href="/about">
                  About
                  <ChevronRightIcon className="h-5 w-5" />
                </Link>
                <Link className="flex items-center justify-between gap-2 text-lg font-semibold" href="/events">
                  Events
                  <ChevronRightIcon className="h-5 w-5" />
                </Link>
                <Link className="flex items-center justify-between gap-2 text-lg font-semibold" href="/">
                  Contact
                  <ChevronRightIcon className="h-5 w-5" />
                </Link>
                <Button className="lg:hidden" size="sm" variant="outline">
                  Buy Ticket
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function ChevronRightIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

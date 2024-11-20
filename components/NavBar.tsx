'use client';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';
import Logo from '/public/images/tedxicon.png';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import Link from 'next/link';

export default function Component() {
  const pathname = usePathname();
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <div className="container mx-auto flex h-16 items-center px-4 md:px-24 justify-between">
          <Link
            className="flex items-center gap-2 text-lg font-semibold"
            href="/">
            <Image src={Logo} width={80} alt="logo" />{' '}
            <span className="text-2xl">ALURwanda</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-10">
            <Link
              className={`relative before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full dark:before:bg-gray-50 ${
                pathname === '/'
                  ? 'text-red-500'
                  : 'text-gray-800 hover:text-red-500'
              }`}
              href="/">
              Home
            </Link>
            <Link
              className="relative before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full dark:before:bg-gray-50"
              href="/about">
              About
            </Link>
            <Link
              className="relative before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full dark:before:bg-gray-50"
              href="/events">
              Events
            </Link>
            <Link
              className="relative before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full dark:before:bg-gray-50"
              href="/partners">
              Partners
            </Link>
            <Link
              className="relative before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gray-900 before:transition-all before:duration-300 hover:before:w-full dark:before:bg-gray-50"
              href="/contact">
              Contact
            </Link>
          </nav>
          <div className="hidden lg:flex items-center">
            <Button className="ml-auto" size="sm" variant="default" asChild>
              <Link
                href={'https://tedxalurwanda.sinc.events/tedxalurwa_570'}
                target="_blank">
                Buy Ticket
              </Link>
            </Button>
          </div>
          <div className="lg:hidden flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="lg:hidden" size="icon" variant="outline">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-6">
                  <Link
                    className={`flex items-center justify-between gap-2 text-lg font-semibold ${
                      pathname === '/'
                        ? 'text-red-500'
                        : 'text-gray-800 hover:text-red-500 cursor-pointer'
                    }`}
                    href="#">
                    Home
                    <ChevronRightIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    className="flex items-center justify-between gap-2 text-lg font-semibold"
                    href="/about">
                    About
                    <ChevronRightIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    className="flex items-center justify-between gap-2 text-lg font-semibold"
                    href="/events">
                    Events
                    <ChevronRightIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    className="flex items-center justify-between gap-2 text-lg font-semibold"
                    href="/">
                    Contact
                    <ChevronRightIcon className="h-5 w-5" />
                  </Link>
                  <Button className="lg:hidden" size="sm" variant="outline">
                    <Link
                      href={'https://tedxalurwanda.sinc.events/tedxalurwa_570'}
                      target="_blank">
                      Buy Ticket
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <div className="mt-20" />
    </>
  );
}

function MenuIcon(props: any) {
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
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
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
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

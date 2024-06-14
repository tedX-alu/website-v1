
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import Input from "antd/es/input"

export default function FooterComponent() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 md:w-1/3">
            <h2 className="text-3xl font-bold text-red-600">TEDxALURwanda</h2>
            <p className="text-gray-700">
              TEDxALURwanda is a dynamic, student-led organization that embodies the spirit of TED's mission to spread
              ideas that can change the world. We believe that by fostering a culture of curiosity, open-mindedness, and
              collaboration
            </p>
            <div className="flex gap-4">
              <InstagramIcon className="text-gray-700 h-6 w-6" />
              <FacebookIcon className="text-gray-700 h-6 w-6" />
              <SunMediumIcon className="text-gray-700 h-6 w-6" />
              <YoutubeIcon className="text-gray-700 h-6 w-6" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:w-1/3 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">About Us</h3>
              <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Events
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Partners
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Nominate a Speaker</h3>
              <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Sponsors
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Team
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Volunteer
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-1/3">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-gray-700">
              TEDxALURwanda is a dynamic, student-led organization that embodies the spirit of TED's.
            </p>
            <div className="flex mt-4">
              <Input placeholder="Enter your email" className="border-2 border-gray-300 p-2 rounded-l-md" />
              <Button className="bg-red-600 text-white rounded-r-md">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function SunMediumIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1" />
      <path d="M12 20v1" />
      <path d="M3 12h1" />
      <path d="M20 12h1" />
      <path d="m18.364 5.636-.707.707" />
      <path d="m6.343 17.657-.707.707" />
      <path d="m5.636 5.636.707.707" />
      <path d="m17.657 17.657.707.707" />
    </svg>
  )
}


function YoutubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
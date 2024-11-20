import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Input from "antd/es/input"

export default function FooterComponent() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 md:w-1/3">
            <h2 className="text-3xl font-bold text-red-600">TEDxALURwanda</h2>
            <p className="text-gray-700">
              TEDxALURwanda is a dynamic, student-led organization that embodies the spirit of TED&apos;s mission to spread
              ideas that can change the world. We believe that by fostering a culture of curiosity, open-mindedness, and
              collaboration
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/tedx.alurwanda" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-red-700 h-6 w-6" />
              </Link>
              <Link href="https://www.facebook.com/tedx.alurwanda" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-red-700 h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/tedx-alurwanda" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-red-700 h-6 w-6" />
              </Link>
              <Link href="https://www.youtube.com/@tedxalurwanda" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="text-red-700 h-6 w-6" />
              </Link>
              <Link href="https://twitter.com/tedxalurwanda" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} className="text-red-700 h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:w-1/3 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">About Us</h3>
              <Link href="/events" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Events
              </Link>
              <Link href="/partners" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Partners
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Nominate a Speaker</h3>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Sponsors
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Team
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                Volunteer
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-1/3">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-gray-700">
              TEDxALURwanda is a dynamic, student-led organization that embodies the spirit of TED&apos;s.
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

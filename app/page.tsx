/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Hero from '@/public/images/hero.jpeg';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TabsTrigger, TabsList, TabsContent, Tabs } from '@/components/ui/tabs';
import { JSX, SVGProps } from 'react';
import speaker from '/images/speaker.png';
import EventHighlight from '@/components/HighlightComponent';

export default function homepage() {
  const highlights = [
    { title: 'Guest Speakers', items: ['Speaker 1', 'Speaker 2', 'Speaker 3'] },
    { title: 'Talks', items: ['Talk 1', 'Talk 2', 'Talk 3'] },
    { title: 'Performance', items: ['Performance 1', 'Performance 2'] },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative h-[600px] w-full max-w-45xl mx-auto my-20 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        {/* Background Image */}
        <Image
          src={Hero}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay to darken the image */}
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        {/* Text content */}
        <div className="relative flex flex-col items-center justify-center h-full p-8 text-center text-white">
          <h1 className="text-5xl font-bold">
            Igniting Ideas, Inspiring Positive Change
          </h1>
          <p className="mt-4 text-sm">x = independently organized TED event.</p>
        </div>
      </div>
      <section className="bg-white text-black p-8 my-8">
        <div className="flex flex-col md:flex-row items-center">
          <img
            alt="Speaker"
            className="md:w-1/2"
            height="400"
            src="/images/speaker.png"
            style={{
              aspectRatio: '400/400',
              objectFit: 'cover',
            }}
            width="400"
          />
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
            <h3 className="text-2xl mb-4">Student-Led University TEDx Event</h3>
            <p className="mb-6">
              TEDxALURwanda is a dynamic, student-led organization that embodies
              the spirit of TED's mission to spread ideas that can change the
              world. We believe that by fostering a culture of curiosity,
              open-mindedness, and collaboration, we can create truly unique and
              impactful experiences. In 2019, we launched our inaugural event,
              themed 'Dare to Disrupt', which brought together an electrifying
              mix of voices from the African Leadership University community and
              beyond. Our goal is to inspire and empower our attendees to think
              differently, share their ideas, and make a meaningful impact in
              their communities.
            </p>
            <Button className="text-white">Learn More</Button>
          </div>
        </div>
      </section>
      <section className="p-8 my-8">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 p-4">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Theme: What Next?</h2>
            <Badge className="mb-4" variant="secondary">
              September 12, 2024
            </Badge>
            <p className="mb-6">Kigali Convention Center</p>
            <p className="mb-6">
              TEDxALURwanda is an independently organized, University TEDx event
              at the renowned African Leadership University licensed by TED.
              Since its inception in 2019, it has grown to become a flagship
              event at our university and within Rwanda, celebrated for its
              dynamic and disruptive ideas. The inaugural event, themed "Dare to
              Disrupt", set a powerful precedent, followed by the equally
              impactful 2023 event under the theme "What If?". Each year, we
              feature an exceptional lineup of speakers from various industries
              and our community, making TEDxALURwanda a recognized platform for
              sharing innovative and transformative ideas that challenge the
              status quo and inspire change.
            </p>
            <Button variant="default">Register Now</Button>
            <Button className="ml-4" variant="outline">
              Event details
            </Button>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img
              alt="Group Photo"
              className="mb-4"
              height="500"
              src="/images/event.png"
              style={{
                aspectRatio: '300/300',
                objectFit: 'cover',
              }}
              width="500"
            />
          </div>
        </div>
      </section>
      {/* <section className="text-center p-8 my-8">
        <h2 className="text-4xl font-bold mb-8">Highlight from 2023 "What If"</h2>
        <Tabs>
          <TabsList>
            <TabsTrigger value="guest-speakers">Guest Speakers</TabsTrigger>
            <TabsTrigger value="talks">Talks</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          scxC<TabsContent value="guest-speakers">
            <div className="flex items-center justify-between">
              <Button variant="ghost">
                <ChevronLeftIcon className="w-6 h-6" />
              </Button>
              <img
                alt="Speaker Slide"
                className="mx-4"
                height="300"
                src="/images/speaker.png"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
              <Button variant="ghost">
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section> */}
    </div>
  );
}

function ChevronLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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

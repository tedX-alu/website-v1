import { Button } from "antd";
import React from "react";
import Theme from "./Theme/Button";
import DetailButton from "./Theme/Theme";
import Link from "next/link";

interface EventData {
  image: string;
  theme: string;
  date: string;
  dateIcon: string;
  location: string;
  locationIcon: string;
  watchlink: string;
  learnlink: string;

}

const eventData: EventData[] = [
  {
    image: "/images/past_events/ted1.png",
    theme: "Theme: What If..?",
    date: "June 3rd, 2023",
    dateIcon: "/images/calendar.svg",
    location: "CanalOlympia Rebero",
    locationIcon: "/images/location.svg",
    watchlink: "https://www.youtube.com/watch?v=nmUbrs9gViM&list=PLfB1pnlx-cAa34lerIiFMqiM0OX6VCNuG&index=1",
    learnlink: "https://www.ted.com/tedx/events/53025",
  },
  {
    image: "/images/past_events/ted2.png",
    theme: "Theme: Dare to Disrupt",
    date: "October, 2019",
    dateIcon: "/images/calendar.svg",
    location: "Kigali City Hall",
    locationIcon: "/images/location.svg",
    watchlink: "https://www.youtube.com/watch?v=CpP5e9lI5XE&list=PLfB1pnlx-cAb7zmlr8GT2zeHGyrrZChkU",
    learnlink: "https://www.ted.com/tedx/events/34644",
  },
];

function Past() {
  return (
    <div>
      <div className="py-6">
        <h1 className="text-3xl font-extrabold">Past Events</h1>
      </div>
      <div className="events grid md:grid-cols-2 gap-16">
        {eventData.map((event: EventData, index: number) => (
          <div key={index} className="event bg-beige p-8 space-y-6">
            <img
              src={event.image}
              alt={`Event ${index}`}
              className="w-[100vh] max-h-[70vh] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold">{event.theme}</h3>
            <div className="xl:flex xl:gap-20 lg:space-y-0 space-y-2 text-sm font-medium">
              <div className="date flex gap-3">
                <img src={event.dateIcon} alt="Date Icon" />
                <span>{event.date}</span>
              </div>
              <div className="location flex gap-3">
                <img src={event.locationIcon} alt="Location Icon" />
                <span>{event.location}</span>
              </div>
            </div>

            <div className="flex xl:gap-10 w-full md:gap-8 gap-2">
              <DetailButton>
                <Link href={event.learnlink} 
                target="_blank">
                  <Button
                    className=" font-semibold border-red-500 xl:px-10 text-red-500  hover:scale-90 font-bricolageGrotesque"
                    size="middle"
                  >
                    Learn More
                  </Button>
                </Link>
              </DetailButton>

              <Theme>
                <Link
                  href={event.watchlink}
                  target="_blank"
                >
                  <Button
                    className=" font-semibold bg-red-500 xl:px-10 text-white hover:scale-90 font-bricolageGrotesque"
                    size="middle"
                  >
                    Watch Talks
                  </Button>
                </Link>
              </Theme>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Past;

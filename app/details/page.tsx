import React from "react";
import { Button } from "antd";
import Image from "next/image";
import Theme from "@/components/Theme/Button";
import Link from "next/link";

function Details() {
  const eventDetails = [
    {
      date: "Thursday, June 13th",
      time: "6 - 9:30 pm",
      location: "Forrester Student Center",
      tickets: "45$ each",
    },
  ];
  return (
    <div className="space-y-16 max-w-screen-2xl mx-auto font-bricolageGrotesque">
      <div className="md:grid flex md:gap-0 gap-6 md:grid-cols-3 md:pt-8 pt-4">
        <div className="flex md:flex-wrap md:gap-6 text-2xl font-medium">
          <Link href={"/events"}>
            <Image
              alt="Arrow left Icon"
              src="/images/arrow-left.svg"
              width={35}
              height={35}
              className="md:pt-1 pt-2"
            />
          </Link>

          <p className=" pt-1 md:block hidden">Back</p>
        </div>
        <div>
          <p className="text-4xl font-bold">Event Details</p>
        </div>
      </div>

      <div>
        <img
          src="/images/event1.png"
          alt="Event image"
          className=" w-full object-cover max-h-[80vh] rounded-md"
        />
      </div>

      <div>
        <p className="text-lg text-justify">
          Join us on Thursday, June 13th for the next wave of ideas worth
          spreading from our region to the world. Our speakers and performers
          will share their work across a mixtape of fields ranging from STEM
          education to AI to equity in women’s sports and more. 
        </p>
        <div>
          {eventDetails.map((event) => (
            <div key={event.date} className="md:my-6 my-8 text-lg font-medium">
              <p className="flex gap-2">
                <span className="text-red-500">Date:</span>
                <span>{event.date}</span>
              </p>
              <p className="flex gap-2">
                <span className="text-red-500">Time:</span>
                <span>{event.time}</span>
              </p>
              <p className="flex gap-2">
                <span className="text-red-500">Location:</span>
                <span>{event.location}</span>
              </p>
              <p className="flex gap-2">
                <span className="text-red-500">Tickets:</span>
                <span>{event.tickets}</span>
              </p>
            </div>
          ))}
          <Theme>
            <Button
              className=" font-semibold bg-red-500 text-white hover:scale-90 font-bricolageGrotesque"
              size="large"
            >
              Register Now
            </Button>
          </Theme>
        </div>
      </div>

      {/* <profile /> */}
    </div>
  );
}

export default Details;

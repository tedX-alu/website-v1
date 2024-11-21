import React from "react";
import { Button } from "antd";
import Image from "next/image";
import Theme from "@/components/Theme/Button";
import Link from "next/link";
import Profile from "@/components/profile";
import { speakers } from "@/lib/speakers";
import { performers } from "@/lib/performers";

function Details() {
  const eventDetails = [
    {
      Time: "12 PM",
      Date: "November 30th 2024",
      Location: "Canal Olympia Rebero",
      tickets: "https://tedxalurwanda.sinc.events/tedxalurwa_570",
    },
  ];


  return (
    <div className=" max-w-screen-2xl xl:mx-16 md:xl-12 mx-8 font-bricolageGrotesque">
      <div className="md:grid flex md:gap-0 gap-6 md:grid-cols-3 md:pt-8 pt-4">
        <div className="flex md:flex-wrap md:gap-6 text-2xl font-medium">
          <Link href={"/events"}>
            <Image
              alt="Arrow left Icon"
              src="/images/arrow-left.svg"
              width={35}
              height={35}
              quality={100}
              className="md:pt-1 pt-2 hover:scale-90"
            />
          </Link>

          <p className=" pt-1 md:block hidden">Back</p>
        </div>
        <div>
          <p className="text-4xl md:pt-0 pt-1 font-bold">Event Details</p>
        </div>
      </div>

      <div className="h-full">
        <img
          src="/images/Frame.jpg"
          alt="Event image"
          className=" w-full object-cover scale-75 max-h-[125vh]"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div>
        <p className="text-lg text-justify">
          Join us on Saturday, November 30th for the next wave of ideas worth
          spreading from our region to the world. Our speakers and performers
          will share their work across a mixtape of fields ranging from STEM
          education to AI to equity in women’s sports and more. 
        </p>
        <div>
          {eventDetails.map((event) => (
            <div key={event.Date} className="md:my-6 my-8 text-lg font-medium">
              <p className="flex gap-2">
                <span className="text-red-500">Time:</span>
                <span>{event.Time}</span>
              </p>

              <p className="flex gap-2">
                <span className="text-red-500">Date:</span>
                <span>{event.Date}</span>
              </p>

              <p className="flex gap-2">
                <span className="text-red-500">Location:</span>
                <span>{event.Location}</span>
              </p>
            </div>
          ))}
          <Theme>
            <Link
              href={"https://tedxalurwanda.sinc.events/tedxalurwa_570"}
              target="_blank"
            >
              <Button
                className=" font-semibold bg-red-500 text-white hover:scale-90 font-bricolageGrotesque"
                size="large"
                target="_blank"
              >
                Register Now
              </Button>
            </Link>
          </Theme>
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="md:text-4xl text-3xl md:my-20 my-8 font-extrabold">Speakers</h1>
        <div className="grid md:grid-cols-4 grid-cols-3 md:gap-16 xl:p-12 md:p-10 ">
          {speakers.map((profile, index) => (
            <Profile
              key={index}
              imageUrl={profile.imageUrl}
              alt={profile.alt}
              profileName={profile.profileName}
              profileTitle={profile.profileTitle}
              profileInstagram={profile.profileInstagram}
            />
          ))}
        </div>
      </div>


      <div className="space-y-6">
        <h1 className="md:text-4xl text-3xl md:my-6 my-8 font-extrabold">Performances</h1>
        <div className="grid md:grid-cols-4 grid-cols-3 md:gap-16 xl:p-12 md:p-10">
          {performers.map((profile, index) => (
            <Profile
              key={index}
              imageUrl={profile.imageUrl}
              alt={profile.alt}
              profileName={profile.profileName}
              profileTitle={profile.profileTitle}
              profileInstagram={profile.profileInstagram}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;

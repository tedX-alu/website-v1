import React from "react";
import { Button } from "antd";
import Theme from "./Theme/Button";
import DetailButton from "./Theme/Theme";
import Link from "next/link";

const Upcoming = () => {
  return (
    <div className="md:pt-12 pt-4">
      <div>
        <div>
          <h1 className="text-3xl font-extrabold">Upcoming Events</h1>
        </div>
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 bg-beige md:p-10 p-4 ">
          <div>
            <img
              src="/images/event.png"
              alt="Event Image"
              className="w-[100vh] max-h-[70vh] object-cover rounded-lg"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-extrabold">Theme: What Next?</h2>
            <span className="md:flex md:justify-between md:space-y-0 space-y-2">
              <div className="flex gap-2 md:pt-0 pt-2">
                <img alt="" src="/images/calendar.svg" />
                <p className=" font-medium ">September 12, 2024</p>
              </div>
              <div className="flex gap-2">
                <img alt="" src="/images/location.svg" />
                <p className=" font-medium ">Kigali Convention Center</p>
              </div>
            </span>
            <p className=" text-justify">
              TEDxALURwanda is an independently organized, University TEDx event
              at the renowned African Leadership University licensed by TED.
              Since its inception in 2019, it has grown to become a flagship
              event at our university and within Rwanda, celebrated for its
              dynamic and disruptive ideas. The inaugural event, themed “Dare to
              Disrupt,” set a powerful precedent, followed by the equally
              impactful 2023 event under the theme “What If…?” Each year, we
              feature an exceptional lineup of speakers from various industries
              and our community, making TEDxALURwanda a recognized platform for
              sharing innovative and transformative ideas that challenge the
              status quo and inspire change.
            </p>
            <div className="pt-8 flex space-x-3">
              <Theme>
                <Button
                  className=" font-semibold bg-red-500 text-white hover:scale-90 font-bricolageGrotesque"
                  size="large"
                >
                  Register Now
                </Button>
              </Theme>

              <DetailButton>
                <Button
                  className=" font-semibold border-red-500 text-red-500  hover:scale-90 font-bricolageGrotesque"
                  size="large"
                  href="/details"
                >
                  Event details
                </Button>
              </DetailButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;

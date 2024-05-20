import { Button } from "antd";
import React from "react";
import Theme from "./Theme/Button";

interface EventData {
  image: string;
  theme: string;
  date: string;
  dateIcon: string;
  location: string;
  locationIcon: string;
  paragraph: string;
  buttonText: string;
}

const eventData: EventData[] = [
  {
    image: "/images/event.png",
    theme: "Theme: What Next?",
    date: "September 12, 2024",
    dateIcon: "/images/calendar.svg",
    location: "Kigali Convention Center",
    locationIcon: "/images/location.svg",
    paragraph:
      "TEDxALURwanda is an independently organized, University TEDx event at the renowned African Leadership University licensed by TED. Since its inception in 2019, it has grown to become a flagship event at our university and within Rwanda, celebrated for its dynamic and disruptive ideas. The inaugural event, themed “Dare to Disrupt,” ",
    buttonText: "What the talks",
  },
  {
    image: "/images/event.png",
    theme: "Theme: What Next?",
    date: "September 12, 2024",
    dateIcon: "/images/calendar.svg",
    location: "Kigali Convention Center",
    locationIcon: "/images/location.svg",
    paragraph:
      "TEDxALURwanda is an independently organized, University TEDx event at the renowned African Leadership University licensed by TED. Since its inception in 2019, it has grown to become a flagship event at our university and within Rwanda, celebrated for its dynamic and disruptive ideas. The inaugural event, themed “Dare to Disrupt,” ",
    buttonText: "What the talks",
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
            <div className="lg:flex lg:justify-between lg:space-y-0 space-y-2 text-sm font-medium">
              <div className="date flex gap-3">
                <img src={event.dateIcon} alt="Date Icon" />
                <span>{event.date}</span>
              </div>
              <div className="location flex gap-3">
                <img src={event.locationIcon} alt="Location Icon" />
                <span>{event.location}</span>
              </div>
            </div>

            <p className="text-sm">{event.paragraph}</p>
            <Theme>
              <Button style={{ width: "100%" }} size="large" className="font-semibold bg-red-500 text-white hover:bg-red-500 focus:ring-red-500 hover:scale-90">
                {event.buttonText}
              </Button>
            </Theme>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Past;

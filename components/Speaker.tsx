import { Button } from "antd";
import React from "react";
import Theme from "./Theme/Button";

interface SpeakerData {
  image: string;
  title: string;
  description: string;
  descriptionLink: string;
  buttonText: string;
}

const speakerData: SpeakerData[] = [
  {
    image: "/images/speaker.png",
    title: "Nominate a speaker",
    description:
      "Each TED conference features more than 50 of the world's most innovative and influential speakers. At TED, we search year-round for presenters who will inform and inspire, surprise and delight. If you know someone who belongs on the TED stage, or if you belong there yourself, we want to hear from you! Please use our speaker recommendation form to tell us why this person would be well-suited to speak at TED. ",
    buttonText: "Nominate a speaker",
    descriptionLink: "https://www.ted.com/about/conferences/speaking-at-ted",
  },
];

function Speaker() {
  return (
    <div className="speakers">
      {speakerData.map((speaker: SpeakerData, index: number) => (
        <div key={index} className="speaker grid lg:grid-cols-2 lg:gap-20">
          <div className="speaker-info space-y-8 py-16">
            <h3 className="text-3xl font-extrabold">{speaker.title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: `${speaker.description} <a href="${speaker.descriptionLink}" target="_blank" rel="noopener noreferrer" class="underline">More about speaking at TED.</a>`,
              }}
            />
            <Theme>
              <Button
                className="font-semibold bg-red-500 text-white hover:bg-red-500 focus:ring-red-500 hover:scale-90"
                size="large"
              >
                {speaker.buttonText}
              </Button>
            </Theme>
          </div>
          <div className="speaker-image">
            <img
              src={speaker.image}
              alt={`Speaker ${index}`}
              className=" object-cover rounded-lg w-[100vh] h-[70vh]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Speaker;

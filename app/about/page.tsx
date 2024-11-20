import Image from 'next/image';
import React from 'react';
import Muslim from '/public/images/roda.png';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Profile from '@/components/profile';
import { team1 } from '@/lib/teams';

const About = () => {
  return (
    <main className="px-6 pt-5 md:pt-20 font-bricolageGrotesque">
      {/* First part */}
      <section className="flex flex-col gap-4 md:space-x-12 md:flex-row items-center xl:space-x-40 md:justify-center">
        <div>
          <h1 className="text-3xl xl:text-7xl font-semibold max-sm:text-center">
            About <br />
            <span className="text-red-500">TEDX</span> ALURwanda
          </h1>
        </div>
        <p className={cn('md:w-[500px]')}>
          TEDxALURwanda is an independently organized, University TEDx event at
          the renowned African Leadership University licensed by TED. Since its
          inception in 2019, it has grown to become a flagship event at our
          university and within Rwanda, celebrated for its dynamic and
          disruptive ideas. The inaugural event, themed “Dare to Disrupt,” set a
          powerful precedent, followed by the equally impactful 2023 event under
          the theme “What If…?” Each year, we feature an exceptional lineup ofr
          speakers from various industries and our community, making
          TEDxALURwanda a recognized platform for sharing innovative and
          transformative ideas that challenge the status quo and inspire change.
        </p>
      </section>
      {/* Image */}
      <section className=" justify-center flex my-5 md:my-20">
        <Image
          src={Muslim}
          width={1500}
          height={100}
          alt="roda"
          className="md:w-2/3 rounded-lg"
        />
      </section>
      {/* Second part */}
      <section className="flex max-sm:flex-col gap-4 md:space-x-12 xl:space-x-40 my-5 md:my-20">
        <div>
          <h1 className="text-center text-3xl md:text-6xl font-semibold pb-5">
            About <span className="text-red-500">TED</span>
          </h1>
          <p>
            TED is a global community, welcoming people from every discipline
            and culture who seek a deeper understanding of the world. We believe
            passionately in the power of ideas to change attitudes, lives and,
            ultimately, the world.  TED began in 1984 as a conference where
            Technology, Entertainment and Design converged, and today covers
            almost all topics from science to business to global issues, in more
            than 100 languages. Meanwhile, independently run TEDx events help
            share ideas in communities around the world
          </p>
        </div>
        <div>
          <h1 className="text-center text-3xl md:text-6xl font-semibold pb-5">
            About <span className="text-red-500">TEDX</span>
          </h1>
          <p>
            In the spirit of ideas worth spreading, TEDx is a program of local,
            self-organised events that bring people together to share a TED-like
            experience. At a TEDx event, TED Talks video and live speakers
            combine to spark deep discussion and connection. These local,
            self-organised events are branded TEDx, where x = independently
            organised TED event. The TED Conference provides general guidance
            for the TEDx program, but individual TEDx events are self-organised.
            (Subject to certain rules and regulations.)
          </p>
        </div>
      </section>
      {/* Third Part  */}
      <section className="flex flex-col mb-8 md:my-20">
        <div className="text-center my-5">
          <h3 className="font-semibold">WHAT MAKES US DIFFERENT</h3>
          <h2 className="text-5xl">The Codes We Live By</h2>
        </div>
        <div className="flex max-md:flex-col max-md:items-center xl:justify-center">
          <div className="border border-solid border-red-500 md:w-[450px] w-[350px] py-10 px-5 text-center">
            <h3 className="text-primary font-semibold text-3xl mb-5">
              We Believe In Ideas
            </h3>
            <p className="">
              At TEDxALURwanda, we believe in the transformative power of ideas.
              Our platform amplifies innovative voices from our community,
              fostering inspiration and change worldwide. We are dedicated to
              igniting curiosity and driving progress through the sharing of
              powerful, insightful ideas.
            </p>
          </div>
          <div className="border border-solid border-red-500 md:w-[450px] w-[350px] py-10 px-5 text-center">
            <h3 className="text-primary font-semibold text-3xl mb-5">
              We Value Community Spirit
            </h3>
            <p className="">
              We value community spirit, recognizing that our strength lies in
              unity. By fostering a culture of collaboration and mutual support,
              we create a space where shared ideas and experiences can truly
              flourish, driving transformative change and enriching our
              collective journey.
            </p>
          </div>
          <div className="border border-solid border-red-500 md:w-[450px] w-[350px] py-10 px-5 text-center">
            <h3 className="text-primary font-semibold text-3xl mb-5">
              We Strive For Excellence
            </h3>
            <p className="">
              We uphold excellence in every endeavor, from the meticulous
              curation of our events to providing exceptional, uplifting
              experiences. Our commitment to excellence permeates all aspects of
              our work, ensuring that every interaction and outcome reflects our
              high standards and makes a lasting impact.
            </p>
          </div>
        </div>
      </section>
      {/* Fourth Part Accordion */}
      <section className="mb-10">
        <div className="text-center my-5 font-semibold">
          <h3 className="text-xl md:text-3xl">Get to Know Us</h3>
          <h2 className="md:text-5xl text-xl">
            <span className="text-red-500">TEDx</span> ALU RWANDA Is Its People
          </h2>
        </div>
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="md:text-3xl">
                Curation Team
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-3">
                {team1.map((profile, index) => (
                  <Profile
                    key={index}
                    imageUrl={profile.imageUrl}
                    alt={profile.alt}
                    profileName={profile.profileName}
                    profileTitle={profile.profileTitle}
                    profileInstagram={profile.profileInstagram}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="md:text-3xl">
                Team 2
              </AccordionTrigger>
              <AccordionContent>
                Team 2 is the best team in the world
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="md:text-3xl">
                Team 3
              </AccordionTrigger>
              <AccordionContent>
                Team 3 is the best team in the world
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="md:text-3xl">
                Other Teams
              </AccordionTrigger>
              <AccordionContent>
                Other teams to be added accordingly
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default About;

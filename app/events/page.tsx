import Past from "@/components/Past";
import Speaker from "@/components/Speaker";
import Upcoming from "@/components/Upcoming";
import React from "react";

function events() {
  return (
    <div className="md:space-y-20 space-y-12 max-w-screen-2xl xl:mx-16 md:mx-12 mx-4 font-bricolageGrotesque">
      <Upcoming />

      <Past />

      <Speaker />
    </div>
  );
}

export default events;

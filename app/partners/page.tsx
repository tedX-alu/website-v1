import React from "react";
import Image from "next/image";
import partner_speaker from "../../public/images/partner_speaker.png";
import alu from "../../public/images/alu.png";
import canal_olympia from "../../public/images/canal_olympia.png";
import java_house from "../../public/images/java_house.png";
import rdb from "../../public/images/rdb.png";
import dric from "../../public/images/dric.png";
import inyange_industries_ltd_logo from "../../public/images/inyange_industries_ltd_logo.png";
import rwanda_events from "../../public/images/Rwanda_Events.png"
import { Button } from "antd";

const partner = () => {
    return (
        <main>
            <section className="p-6">
                <div className="flex flex-col lg:flex-row relative lg:relative">
                    <div className="w-full lg:w-3/5">
                        <Image
                            src={partner_speaker}
                            alt="Speaker"
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                    <div className="lg:absolute lg:top-[10%] lg:right-0 bg-white p-6 m-6 w-full lg:w-2/5 shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Interested in engaging with the audience?</h2>
                        <p className="mb-4">
                            Becoming a TEDxALURwanda partner means that you share our mission of spreading ideas that will change the world. Engage with the future, find an elusive audience, and test your ideas to create a tangible relationship. Join our community of thought leaders and benefit from an individually tailored sponsorship.
                        </p>
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                            Become a partner
                        </button>
                    </div>
                </div>
            </section>

            <section>
    <div>
        <h1 className="font-bold text-2xl text-center m-10">Our Partners</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div className="">
                <Image
                    src={java_house}
                    width={250}
                    height={100}
                    className="max-w-full h-auto"
                />
            </div>
            <div className="">
                <Image
                    src={alu}
                    width={250}
                    height={100}
                    className="max-w-full h-auto"
                />
            </div>
            <div className="">
                <Image
                    src={canal_olympia}
                    width={350}
                    height={200}
                    className="max-w-full h-auto"
                />
            </div>
            <div className="">
                <Image
                    src={inyange_industries_ltd_logo}
                    width={150}
                    height={100}
                    className="max-w-full h-auto"
                />
            </div>
            <div className="">
                <Image
                    src={rdb}
                    width={150}
                    height={100}
                    className="max-w-full h-auto"
                />
            </div>
            <div className="">
                <Image
                    src={dric}
                    width={150}
                    height={100}
                    className="max-w-full h-auto"
                />
            </div>
            <div className="">
                <Image
                    src={rwanda_events}
                    width={150}
                    height={100}
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    </div>
</section>

        </main>
    )
}
export default partner;
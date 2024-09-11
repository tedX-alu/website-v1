"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Component() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/contact');
  };
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4">
      <section className="flex flex-col items-center w-full max-w-5xl">
        <div className="relative w-full max-w-3xl">
          <Image src="/images/speaker.png" alt="Speaker" width={600} height={400} className="w-full h-auto" />
          <div className="absolute left-1/2 top-1/2 transform translate-x-1/4 -translate-y-1/2 p-6 bg-gray-200 bg-opacity-100 shadow-md" style={{ width: '60%', height: 'auto', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <h2 className="text-xl font-bold">Interested in engaging with the audience?</h2>
            <p className="mt-2 text-sm">
              Becoming a TEDxALURwanda partner means that you share our mission of spreading ideas that will change the
              world. Engage with the future, find an elusive audience, and test your ideas to create a tangible
              relationship. Join our community of thought leaders and benefit from an individually tailored sponsorship.
            </p>
            <Button className="mt-4 bg-red-500 text-white" onClick={handleClick}>Become a partner</Button>
          </div>
        </div>
        <h2 className="mt-12 text-2xl font-bold">Our Partners</h2>
        <div className="mt-8 overflow-hidden w-full">
          <div className="flex flex-col space-y-8">
            <div className="partners-animation-left flex space-x-8">
              <Image src="/images/javahouse.png" alt="Java House" width={200} height={100} className="h-auto" />
              <Image src="/images/alu.png" alt="ALU" width={200} height={100} className="h-auto" />
              <Image src="/images/canalolympia.jpeg" alt="Canal Olympia" width={200} height={50} className="h-12" />
              <Image src="/images/rdb.jpeg" alt="RDB" width={200} height={80} className="h-16" />
            </div>
            <div className="partners-animation-right flex space-x-8">
              <Image src="/images/dric.png" alt="Dric" width={200} height={100} className="h-auto" />
              <Image src="/images/inyange.jpeg" alt="Inyange" width={200} height={100} className="h-auto" />
              <Image src="/images/rwandaevents.png" alt="Rwanda Events" width={200} height={100} className="h-auto" />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100%));
          }
        }
        @keyframes slide-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(100%));
          }
        }
        .partners-animation-left {
          animation: slide-left 10s linear infinite;
        }
        .partners-animation-right {
          animation: slide-right 10s linear infinite;
        }
      `}</style>
    </div>
  );
}

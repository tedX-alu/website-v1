
import Image from 'next/image';
import speaker_home from '/public/images/speaker_home.png';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 p-6 h-1/3 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Igniting Ideas, Inspiring Positive Change</h1>
        <p className="text-gray-600">x = independently organized TED event.</p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-6">
          <div className='mt-20' />
          <h2 className="text-2xl font-bold mb-4">Student-Led University TEDx Event</h2>
          <p className="text-gray-600 mb-4">
          TEDxALURwanda is a dynamic, student-led organization that embodies the spirit of TED’s mission to spread ideas that can change the world. We believe that by fostering a culture of curiosity, open-mindedness, and collaboration, we can create truly unique and impactful experiences. In 2019, we launched our inaugural event, themed ‘Dare to Disrupt,’ which brought together an electrifying mix of voices from the African Leadership University community and beyond. Our goal is to inspire and empower our attendees to think differently, share their ideas, and make a meaningful impact in their communities          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
        <div className='mt-20' />
        <div className="mt-6 md:mt-0 md:w-1/2">
          <Image
            src={speaker_home}
            alt="Speaker"
            width={500}
            height={333}
            className="rounded-lg w-full"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Theme: What Next?</h2>
        <p className="text-gray-600 mb-4">
        TEDxALURwanda is an independently organized, University TEDx event at the renowned African Leadership University licensed by TED. Since its inception in 2019, it has grown to become a flagship event at our university and within Rwanda, celebrated for its dynamic and disruptive ideas. The inaugural event, themed “Dare to Disrupt,” set a powerful precedent, followed by the equally impactful 2023 event under the theme “What If…?” Each year, we feature an exceptional lineup of speakers from various industries and our community, making TEDxALURwanda a recognized platform for sharing innovative and transformative ideas that challenge the status quo and inspire change.        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4 sm:mb-0">
            Register Now
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Event details
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Thank you to our Speakers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image
            src={speaker_home} 
            alt="Speaker 1"
            width={200}
            height={200}
            className="rounded-lg w-full"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Highlight from 2023 "What If"</h2>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
          <a href="#" className="text-red-500 hover:text-red-600 font-bold mb-2 sm:mb-0">
            Guest Speakers
          </a>
          <a href="#" className="text-red-500 hover:text-red-600 font-bold mb-2 sm:mb-0">
            Talks
          </a>
          <a href="#" className="text-red-500 hover:text-red-600 font-bold">
            Performance
          </a>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
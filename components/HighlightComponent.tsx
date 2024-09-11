"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HighlightItem {
  title: string;
  items: string[];
}

interface EventHighlightProps {
  eventName: string;
  year: number;
  highlights: HighlightItem[];
}

const EventHighlight: React.FC<EventHighlightProps> = ({ eventName, year, highlights }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : highlights.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < highlights.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Highlight from {year} &quot;{eventName}&quot;
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{highlights[currentIndex].title}</h3>
        <ul className="list-disc pl-5 mt-2">
          {highlights[currentIndex].items.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          Next
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default EventHighlight;
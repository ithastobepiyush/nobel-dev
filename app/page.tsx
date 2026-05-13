import ChatBot from "./components/Chatbot";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TimedCard from "./components/TimedCard";

const timecardData = [
  {
    image: '/timecard/img1.webp',
    title: 'NATURE',
    title2: 'EXPLORER',
    place: 'ICELAND',
    description: 'Explore the breathtaking landscapes of Iceland, from glaciers to volcanic beaches.'
  },
  {
    image: '/timecard/img2.webp',
    title: 'MOUNTAIN',
    title2: 'ADVENTURE',
    place: 'SWITZERLAND',
    description: 'Experience the majesty of the Swiss Alps with stunning views and fresh mountain air.'
  },
  {
    image: '/timecard/img3.webp',
    title: 'FOREST',
    title2: 'RETREAT',
    place: 'CANADA',
    description: 'Immerse yourself in the dense forests of Canada for a peaceful and rejuvenating escape.'
  },
  {
    image: '/timecard/img4.webp',
    title: 'OCEAN',
    title2: 'BREEZE',
    place: 'MALDIVES',
    description: 'Relax on the crystal clear waters and white sandy beaches of the Maldives.'
  },
  {
    image: '/timecard/img5.webp',
    title: 'DESERT',
    title2: 'DREAMS',
    place: 'SAHARA',
    description: 'Discover the vast and mysterious beauty of the Sahara Desert under the stars.'
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <TimedCard data={timecardData} />
      <Services />
      <ChatBot />
    </>
  );
}

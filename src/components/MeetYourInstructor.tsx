'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const people = [
  {
    id: 1,
    name: "John",
    designation: "The Mentor",
    image : "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Jane",
    designation: "The Boss",
    image : "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Doe",
    designation: "The Expert",
    image : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Smith",
    designation: "The Pro",
    image : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const kk = () => {
  return (
    <div
    className="relative h-[40rem] overflow-hidden flex items-center justify-center"
    >
        <WavyBackground
        className="w-full max-w-7xl h-full mx-auto flex flex-col items-center justify-center"
        >
            <h2
            className="text-2xl md:text-4xl lg:text-7xl mb-8 font-bold text-white text-center"
            >Meet Our Instructor</h2>
            <p
            className="text-base md:text-lg text-white text-center mb-4"
            >
                Our instructors are well experienced and have been teaching for a long time.
            </p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={people} />
            </div>
        </WavyBackground>
    </div>
  );
};

export default kk;

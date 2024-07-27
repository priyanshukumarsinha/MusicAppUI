"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "I have been a musician for over 20 years, and I have never felt more inspired than I do now. Discover Your Sound has helped me to unlock my full potential, and I am so grateful for their support and guidance.",
    name: "John Doe",
    title: "Musician",
  },
  {
    quote:
      "Discover Your Sound has helped me to take my music to the next level. Their team of experts are truly dedicated to helping you to achieve your goals, and I cannot recommend them highly enough.",
    name: "Jane Doe",
    title: "Singer-Songwriter",
  },
  {
    quote:
      "I have always been passionate about music, but I never knew how to take my skills to the next level. Discover Your Sound has helped me to develop my sound, and I am so excited to see where my music will take me.",
    name: "Alice Smith",
    title: "Music Producer",
  },
  {
    quote:
      "I have been a musician for over 20 years, and I have never felt more inspired than I do now. Discover Your Sound has helped me to unlock my full potential, and I am so grateful for their support and guidance.",
    name: "John Doe",
    title: "Musician",
  },
  {
    quote:
      "Discover Your Sound has helped me to take my music to the next level. Their team of experts are truly dedicated to helping you to achieve your goals, and I cannot recommend them highly enough.",
    name: "Jane Doe",
    title: "Singer-Songwriter",
  },
  {
    quote:
      "I have always been passionate about music, but I never knew how to take my skills to the next level. Discover Your Sound has helped me to develop my sound, and I am so excited to see where my music will take me.",
    name: "Alice Smith",
    title: "Music Producer",
  },
];

const TestimonialCards = () => {
  return (
    <div
    className="h-[40rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] flex flex-col justify-center"
    >
      <h2 
      className="text-3xl font-bold text-center mb-8 z-10"
      >Hear Our Harmony : Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;

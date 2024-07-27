"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";

const page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-4xl lg:text-6xl font-bold mb-8 text-center">
        Contact Us
      </h2>
      <p
      className="text-white text-center text-lg max-w-md mx-auto"
      >Get in touch with us, we&apos;d love to hear from you.</p>
      <div>
        <form className="flex flex-col w-full gap-5 justify-center items-center my-10">
          <div className="w-full px-60 ">
            <input className="w-full bg-transparent border border-white/[0.2] rounded-sm min-h-14 px-5 py-2" placeholder="Name" type="text" id="name" name="name" />
          </div>
          <div  className="w-full px-60 ">
            <input className="w-full bg-transparent border border-white/[0.2] rounded-sm min-h-14 px-5 py-2" placeholder="Email" type="email" id="email" name="email" />
          </div>
          <div className="w-full px-60 ">
            <textarea className="w-full bg-transparent border border-white/[0.2] rounded-sm min-h-14 px-5 py-2" placeholder="Message" id="message" name="message"></textarea>
          </div>
          <button 
          className="bg-white text-black px-10 py-2 rounded-sm"
          type="submit">Send</button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;

'use client'

import { StickyScroll } from "./ui/sticky-scroll-reveal"

const content = [
  {
    title : "Discover Your Sound with Us : A Personal Journey to Your Best Sound",
    description : 
      "We believe that every musician has a unique sound that is waiting to be discovered. Our team of experts will work with you to find that sound, and help you to develop it into something truly special. Whether you are a beginner or an experienced musician, we can help you to unlock your full potential and create music that you are truly proud of."
  },
  {
    title : "A Team of Experts with a Passion for Music",
    description : 
      "Our team of experts are all passionate musicians who are dedicated to helping you to achieve your goals. We have years of experience in the music industry, and we are committed to providing you with the best possible service. Whether you are looking for advice on how to improve your technique, or you need help with songwriting, we are here to help."
  },
  {
    title : "A Range of Services to Suit Your Needs",
    description : 
      "We offer a range of services to suit your needs, including music lessons, songwriting workshops, and recording sessions. Whether you are looking to improve your skills, or you want to take your music to the next level, we have the expertise and the resources to help you to achieve your goals. Contact us today to find out more about how we can help you to discover your sound."
  },
  {
    title : "A Commitment to Excellence",
    description : 
      "At Discover Your Sound, we are committed to providing you with the best possible service. We take pride in our work, and we are dedicated to helping you to achieve your goals. Whether you are looking to improve your skills, or you want to take your music to the next level, we have the expertise and the resources to help you to succeed. Contact us today to find out more about how we can help you to discover your sound." 
  },
  {
    title : "Contact Us Today to Find Out More",
    description : 
      "If you are ready to take your music to the next level, contact us today to find out more about how we can help you to discover your sound. Whether you are a beginner or an experienced musician, we have the expertise and the resources to help you to achieve your goals. Contact us today to find out more about how we can help you to discover your sound."
  },
  {
    title : "Discover Your Sound with Us : A Personal Journey to Your Best Sound",
    description : 
      "We believe that every musician has a unique sound that is waiting to be discovered. Our team of experts will work with you to find that sound, and help you to develop it into something truly special. Whether you are a beginner or an experienced musician, we can help you to unlock your full potential and create music that you are truly proud of."
  }
]

const WhyChooseUs = () => {
  return (
    <div
    className="flex items-center justify-center"
    >
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
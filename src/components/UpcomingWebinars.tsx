'use client'

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect"

const featuredWebinars = [
    {
        'title' : 'Music Production',
        'description' : 'Learn how to produce music like a pro, from the comfort of your home. Our instructors will guide you through the process of creating your own music.',
        'link' : '/music-production',
        'image' : 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
        'alt' : 'Music Production',
        'isFeatured' : true
    },
    {
        'title' : 'Web Development',
        'description' : 'Learn how to build websites and web applications using the latest technologies. Our instructors will guide you through the process of creating your own websites.',
        'link' : '/web-development',
        'image' : 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
        'alt' : 'Web Development',
        'isFeatured' : true
    },
    {
        'title' : 'Mobile Development',
        'description' : 'Learn how to build mobile applications for iOS and Android using the latest technologies. Our instructors will guide you through the process of creating your own mobile applications.',
        'link' : '/mobile-development',
        'image' : 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
        'alt' : 'Mobile Development',
        'isFeatured' : true
    },
    {
        'title' : 'Data Science',
        'description' : 'Learn how to analyze data and make predictions using machine learning algorithms. Our instructors will guide you through the process of creating your own data science projects.',
        'link' : '/data-science',
        'image' : 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
        'alt' : 'Data Science',
        'isFeatured' : true
    },
    {
        'title' : 'Cloud Computing',
        'description' : 'Learn how to deploy applications to the cloud using services like AWS, Azure, and Google Cloud. Our instructors will guide you through the process of creating your own cloud computing projects.',
        'link' : '/cloud-computing',
        'image' : 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
        'alt' : 'Cloud Computing',
        'isFeatured' : true
    },
    {
        'title' : 'Cybersecurity',
        'description' : 'Learn how to secure your applications and data from cyber attacks. Our instructors will guide you through the process of creating your own cybersecurity projects.',
        'link' : '/cybersecurity',
        'image' : 'https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b',
        'alt' : 'Cybersecurity',
        'isFeatured' : true
    }
]

const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
        <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <div
            className="text-center"
            >
                <h2
                className="text-base text-teal-600 font-semibold tracking-wide uppercase"
                >Featured Webinars</h2>
                <p 
                className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'
                >
                    Enhanced learning opportunities for our members
                </p>
            </div>
            <div
            className="mt-10"
            >
                <HoverEffect items={featuredWebinars} />
            </div>
            <div
        className='mt-10 text-center'
        >
            <Link
            className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700'
            href='/webinars'>
                View All Webinars
            </Link>
        </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars
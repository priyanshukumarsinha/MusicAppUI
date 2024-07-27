'use client';
import Link from 'next/link'
import courseData from '../data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
    title: string;
    description: string;
    isFeatured: boolean;
    id: number;
    slug: string;
    price: number;
    instructor: string;
    image: string;
}

const FeaturedSection = () => {
    const featuredCourses = courseData.courses.filter((course : Course) => course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'> 
        <div>
            <div className="text-center">
                <h2
                className= 'text-base text-teal-600 font-semibold tracking-wide uppercase'
                >FEATURED COURSES</h2>
                <p
                className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'
                >Check out our most popular courses</p>
            </div>
        </div>
        <div
        className='mt-10'
        >
            <div 
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-10'
            >
                {
                    featuredCourses && featuredCourses.map((course: Course) => (
                        <BackgroundGradient>
                            <div
                            className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full'
                            >
                                <div
                                className='relative flex-shrink-0 w-full'
                                >
                                    <img
                                    className='h-48 w-full object-cover'
                                    src={course.image}
                                    alt={course.title}
                                    />
                                </div>
                                <div
                                className='flex-1 p-6 flex flex-col justify-between'
                                >
                                    <div
                                    className='flex-1'
                                    >
                                        <p
                                        className='text-sm font-medium text-teal-600'
                                        >{course.instructor}</p>
                                        <h3
                                        className='mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100'
                                        >{course.title}</h3>
                                        <p
                                        className='mt-2 text-base text-gray-500 dark:text-gray-400'
                                        >{course.description}</p>
                                    </div>
                                    <div
                                    className='mt-4'
                                    >
                                        <Link
                                        href={`/courses/${course.slug}`}
                                            className='block text-center w-full py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700'
                                        >
                                                View Course
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </BackgroundGradient>
                    ))
                }
            </div>
        </div>
        <div
        className='mt-20 text-center'
        >
            <Link 
            className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700'
            href='/courses'>
                View All Courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturedSection
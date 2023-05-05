/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedTexts from '@/components/AnimatedTexts'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/MySkills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNum = ({val}) => {
const ref = useRef(null);
const motionVal = useMotionValue(0)
const springVal = useSpring(motionVal, {duration: 300})
const isInview = useInView(ref, {once: true});

useEffect(() => {
    if(isInview) {
        motionVal.set(val)
    }
}, [isInview, val, motionVal])

useEffect(() => {
     springVal.on('change',(newVal) => {
        // console.log(newVal);
        ref.current && newVal.toFixed(0) <= val ? ref.current.textContent = newVal.toFixed(0) : undefined
     })
}, [springVal, val])
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>  {"Ore's"} | About Page </title>
        <meta name="description" content="about page" />
      </Head>

      <main className="flex w-full items-center flex-col justify-center dark:text-light">
        <Layout className='pt-16'>
        <AnimatedTexts text="Passion Fuels Purpose!" className='mb-16' />
        <div className="grid w-full grid-cols-8 gap-16">
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography </h2>
                <p className='font-medium'>Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients' visions to life.</p>
<p className=' font-medium'>
I believe that design is about more than just making things look pretty – it's about solving problems and 
creating intuitive, enjoyable experiences for users. 
</p>
<p className='font-medium'>
Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
</p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                <Image src={profilePic} alt="ProfileName" className="w-full h-auto rounded-2xl" />
            </div>

         <div className='col-span-2 flex flex-col items-end justify-between'>
            <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                    <AnimatedNum val={30} />+
                    </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients</h2>
            </div>

            <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNum val={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects Completed</h2>
            </div>

            <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNum val={4} />+
                    </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 '>Years of experience</h2>
            </div>
        </div>

        </div>
        <Skills />
        <Experience />
        <Education />
        </Layout>
      </main>
    </>
  )
}

export default about;

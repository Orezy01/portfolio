import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedTexts from '@/components/AnimatedTexts'
import Image from 'next/image'
import Link from 'next/link'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import { motion } from 'framer-motion'

const FramerImg = motion(Image)

const Article = ({img, title, date, link}) => {
   return(
    <li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4'>
      <Link 
      href={link}
      target='_blank'
      >
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      </Link>
      <span className='text-primary font-semibold pl-4'>{date}</span>
    </li>
   ) 
}

const FTArticle = ({img, title, time, summary, link}) => {
    return(
      <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
        <Link
             href={link}
             target='_blank'
             className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
             >
                <FramerImg 
                src={img} 
                alt={title} 
                className="w-full h-auto"
                whileHover={{
                  scale: 1.05
                }}
                transition={{
                  duration:0.2
                }}
                 />
            </Link>
            <Link
             href={link}
             target='_blank'
             >
              <h2 className='capitalize text-2xl font-bold my-2 hover:underline mt-4'>{title}</h2>
             </Link>
             <p className='text-sm mb-2'>{summary}</p>
             <span className='text-primary font-semibold'>{time}</span>
      </li>
    )
}

const article = () => {
  return (
    <>
      <Head>
        <title>  {"Ore's"} | Article Page </title>
        <meta name="description" content="article page" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedTexts text="Words Can Change The World!" className='mb-16' />
            <ul className='grid grid-cols-2 gap-16'>
              <FTArticle
              title={`Build A Custom Pagination Component in ReactJS from Scratch`}
              summary={`
              Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
              `}
              time={`9 min read`}
              link={`/`}
              img={article1}
               />
              <FTArticle
              title={`Build A Custom Pagination Component in ReactJS from Scratch`}
              summary={`
              Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
              `}
              time={`9 min read`}
              link={`/`}
              img={article2}
               />
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Article</h2>
            <ul>
              <Article
                title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                img={article3}
                date={`May 2, 2023`}
                link={`/`}
              />

              <Article
                title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                img={article3}
                date={`May 2, 2023`}
                link={`/`}
              />

              <Article
                title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                img={article3}
                date={`May 2, 2023`}
                link={`/`}
              />

              <Article
                title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                img={article3}
                date={`May 2, 2023`}
                link={`/`}
              />

              <Article
                title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                img={article3}
                date={`May 2, 2023`}
                link={`/`}
              />

              <Article
                title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                img={article3}
                date={`May 2, 2023`}
                link={`/`}
              />

              <Article
                title={`Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling`}
                img={article3}
                date={`May 2, 2023`}
                link={`/`}
              />
            </ul>
        </Layout>
      </main>
    
    </>
  )
}

export default article

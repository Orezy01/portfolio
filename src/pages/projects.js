import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import AnimatedTexts from '@/components/AnimatedTexts'
import Link from 'next/link'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { GithubIcon } from '@/components/Icons'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

    
    return(
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl'>

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
                {/* <Image src={profilePic} alt="ProfileName" className="w-full h-auto rounded-2xl" /> */}

            <Link
             href={link}
             target='_blank'
             className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
             >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'> Visit Project </Link>
                </div>
            </div>
        </article>
    )
}

const OtherProject = ({title, type, img, link, github}) => {
    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative rounded-br-2xl"> 

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
        <Link
             href={link}
             target='_blank'
             className='w-full cursor-pointer overflow-hidden rounded-lg'
             >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
                </Link>
                
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link
                 href={link}
                  target='_blank'
                   className='text-lg font-semibold underline'
                   >
                    Visit
                    </Link>
                <Link href={github} target='_blank' className='w-8'> {" "} <GithubIcon />{" "} </Link>
                
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>  {"Ore's"} | Projects Page </title>
        <meta name="description" content="projects page" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedTexts text={"Imagination Trumps Knowledge!"}
            className='mb-16'
            />
            <div className="grid grid-cols-12 gap-24 gap-y-32">
                <div className="col-span-12">
                    <FeaturedProject
                    title={`Crypto Screener Application`}
                    img={project1}
                    summary={`Crypto Screener Application
                    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.`}
                    link={"/"}
                    github={"/"}
                    type={`Featured Project`}
                    
                    />
                </div>
                <div className="col-span-6">
                <OtherProject
                    title={`Crypto Screener Application`}
                    img={project1}
                    summary={`Crypto Screener Application
                    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.`}
                    link={"/"} 
                    github={"/"}
                    type={`Featured Project`}
                    
                    />
                </div>
                <div className="col-span-6">
                <OtherProject
                    title={`Crypto Screener Application`}
                    img={project1}
                    summary={`Crypto Screener Application
                    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.`}
                    link={"/"}
                    github={"/"}P
                    type={`Featured Project`}
                    
                    />
                </div>

                <div className="col-span-12">
                <FeaturedProject
                    title={`Crypto Screener Application`}
                    img={project1}
                    summary={`Crypto Screener Application
                    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.`}
                    link={"/"}
                    github={"/"}
                    type={`Featured Project`}
                    
                    />
                </div>
                <div className="col-span-6">
                    <OtherProject
                    title={`Crypto Screener Application`}
                    img={project1}
                    summary={`Crypto Screener Application
                    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.`}
                    link={"/"}
                    github={"/"}
                    type={`Featured Project`}
                    
                    />
                </div>
                <div className="col-span-6">
                    <OtherProject
                    title={`Crypto Screener Application`}
                    img={project1}
                    summary={`Crypto Screener Application
                    A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency.`}
                    link={"/"}
                    github={"/"}
                    type={`Featured Project`}
                    
                    />
                </div>
            </div>
        </Layout>
      </main>
    </>
  )
}

export default projects

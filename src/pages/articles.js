import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedTexts from '@/components/AnimatedTexts'
const article = () => {
  return (
    <>
      <Head>
        <title>  {"Ore's"} | Article Page </title>
        <meta name="description" content="article page" />
      </Head>
      <main>
        <Layout className='pt-16'>
            <AnimatedTexts text="Words Can Change The World!" className='mb-16' />
        </Layout>
      </main>
    
    </>
  )
}

export default article

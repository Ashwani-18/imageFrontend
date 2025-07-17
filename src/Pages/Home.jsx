import React from 'react'
import Layout from '../components/Layout'
import Banner1 from '../components/Banner1'
import Banner2 from '../components/Banner2'
import Reviews from '../components/Reviews'
import Price from '../components/Price'

function Home() {
  return (
    <>
    <Layout>
       <Banner1/>
       <Banner2/>
       <Reviews/>
       <Price/>
    </Layout>
    </>
  )
}

export default Home
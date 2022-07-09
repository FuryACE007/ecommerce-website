import React from 'react'
import { HeroBanner} from '../components'
import { client } from '../lib/client'

import classes from '../styles/Home.module.css'

const Home = ({products, bannerData}) => {
  return (
    <>
    {/* Banner Area */}
      <HeroBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products: { products, bannerData }
    }
  }
}

export default Home
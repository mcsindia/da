import React from 'react'
import { Header } from '../../../components/web/Header/Header'
import { Footer } from '../../../components/web/Footer/Footer'
import { Hero } from './Hero'
import { TrendingProducts } from '../TrendingProducts/TrendingProducts'
import { StorySection } from '../StorySection/StrorySection'
import { NewArrivals } from '../NewArrivals/NewArrivals'
import { SpecialOffers } from '../SpecialOffers/SpecialOffers'

export const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <TrendingProducts/>
        <StorySection/>
        <NewArrivals/>
        <SpecialOffers/>
        <Footer/>
    </div>
  )
}

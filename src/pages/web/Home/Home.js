import React from 'react'
import { Header } from '../../../components/web/Header/Header'
import { Footer } from '../../../components/web/Footer/Footer'
import { TrendingProducts } from '../TrendingProducts/TrendingProducts'
import { StorySection } from '../StorySection/StrorySection'
import { NewArrivals } from '../NewArrivals/NewArrivals'
import { SpecialOffers } from '../SpecialOffers/SpecialOffers'
import { Testimonial } from '../Testimonial/Testimonial'
import { Hero } from '../Hero/Hero'

export const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <TrendingProducts/>
        <StorySection/>
        <NewArrivals/>
        <SpecialOffers/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

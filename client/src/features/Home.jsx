import React from 'react'
import ProductSlide from '../components/ProductSlide'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Theme from '../layout/Theme'
import ProductsList from './ProductsList'
import Promo from '../components/Promo'
import Recommend from './Recommend'
import Trending from '../components/Trending'

export default function Home() {
    return (
        <>
            <ProductSlide />
            <Promo />
            <Trending />
            <Recommend />
        </>
    )
}

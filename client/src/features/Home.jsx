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
        <Header/>         
            <section className="py-4 osahan-main-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="osahan-home-page">
                                <div className="osahan-body">
                                    <ProductSlide />
                                    <Promo />
                                    <Theme/>
                                    <Trending />
                                    <Recommend />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
      <Footer/>
        </>
    )
}

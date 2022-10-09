import React from 'react'
import ProductCard from '../Basket/ProductCard'
import Recommend from '../Basket/Recommend'
import ProductSlide from '../components/ProductSlide'
import DarkMode from '../layout/DarkMode'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import ProductsList from './ProductsList'
import Promo from './Promo'

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
                                    <DarkMode/>
                                    <ProductsList />
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

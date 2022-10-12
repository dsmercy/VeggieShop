import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Theme from '../layout/Theme';
import ProductCard from '../components/ProductCard'



export default function ProductsList() {
    const [products, setProducts] = useState([
        { id: "1", name: "chilli", description: "Fresh Chilli from farmms", price: "$0.8/kg", pictureUrl: "img/listing/v1.jpg", },
        { id: "2", name: "Onion", description: "Fresh Onion from farmms", price: "$1.8/kg", pictureUrl: "img/listing/v2.jpg", },
        { id: "3", name: "Cauliflower", description: "Fresh Cauliflower from farmms", price: "1$", pictureUrl: "img/listing/v5.jpg", },
        { id: "4", name: "Carrot", description: "Fresh Chilli from farmms", price: "1$", pictureUrl: "img/listing/v6.jpg", },
        { id: "5", name: "Tomato", description: "Fresh Tomato from farmms", price: "1$", pictureUrl: "img/listing/v3.jpg", },
        { id: "6", name: "Cabbage", description: "Fresh Cabbage from farmms", price: "1$", pictureUrl: "img/listing/v4.jpg", },
        { id: "7", name: "chilli", description: "Fresh Chilli from farmms", price: "1$", pictureUrl: "img/listing/v7.jpg", },
        { id: "8", name: "Onion", description: "Fresh Onion from farmms", price: "$1.8/kg", pictureUrl: "img/listing/v2.jpg" }
    ]);

    // set default theme
    useEffect(() => {
        //console.log(products);
    }, [products]);


    return (
        <>
            <section className="py-4 osahan-main-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="osahan-listing">
                                <div className="d-flex align-items-center mb-3">
                                    <h4>All Products</h4>
                                    <div className="m-0 text-center ml-auto">
                                        <Link to='/'  data-toggle="modal" data-target="#exampleModal" className="btn text-muted bg-white mr-2"><i className="icofont-filter mr-1"></i> Filter</Link>
                                        <Link to='/'  data-toggle="modal" data-target="#exampleModal" className="btn text-muted bg-white"><i className="icofont-signal mr-1"></i> Sort</Link>
                                    </div>
                                </div>
                                <div className="row">

                                    {products.map(product => (
                                        <ProductCard product={product} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

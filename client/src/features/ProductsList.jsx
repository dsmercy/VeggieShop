import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Theme from '../layout/Theme';
import ProductCard from '../components/ProductCard'
import Filter from "../components/Filter";


export default function ProductsList() {
    const [products, setProducts] = useState([
        { id: "1", name: "chilli", description: "Fresh Chilli from farmms", price: "0.8", pictureUrl: "img/listing/v1.jpg", },
        { id: "2", name: "Onion", description: "Fresh Onion from farmms", price: "1.8", pictureUrl: "img/listing/v2.jpg", },
        { id: "3", name: "Cauliflower", description: "Fresh Cauliflower from farmms", price: "1", pictureUrl: "img/listing/v5.jpg", },
        { id: "4", name: "Carrot", description: "Fresh Chilli from farmms", price: "1", pictureUrl: "img/listing/v6.jpg", },
        { id: "5", name: "Tomato", description: "Fresh Tomato from farmms", price: "1", pictureUrl: "img/listing/v3.jpg", },
        { id: "6", name: "Cabbage", description: "Fresh Cabbage from farmms", price: "1", pictureUrl: "img/listing/v4.jpg", },
        { id: "7", name: "Start Anise", description: "Fresh Chilli from farmms", price: "1", pictureUrl: "img/listing/v7.jpg", },
        { id: "8", name: "Brinjal", description: "Fresh Onion from farmms", price: "1.8", pictureUrl: "img/listing/v8.jpg" },
        { id: "9", name: "Capsicum", description: "Fresh Onion from farmms", price: "1.8", pictureUrl: "img/listing/v9.jpg" },
        { id: "10", name: "Lady Finger", description: "Fresh Onion from farmms", price: "1.8", pictureUrl: "img/listing/v10.jpg" },
        { id: "11", name: "Garlic", description: "Fresh Onion from farmms", price: "1.8", pictureUrl: "img/listing/v11.jpg" },
        { id: "12", name: "Ginger", description: "Fresh Onion from farmms", price: "1.8", pictureUrl: "img/listing/v12.jpg" },
    ]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                        <button  onClick={handleShow} className="btn text-muted bg-white mr-2"><i className="icofont-filter mr-1"></i> Filter</button>
                                    </div>
                                </div>
                                <div className="row">

                                    {products.map(product => (
                                        <ProductCard product={product} key={product.id}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<Filter handleClose={handleClose} handleShow={handleShow} show={show}/>
        </>
    )
}

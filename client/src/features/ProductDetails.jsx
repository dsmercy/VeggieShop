import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function ProductDetails() {

    const [products, setProducts] = useState([
        { id: "1", name: "chilli", description: "Fresh Chilli from farms", price: "0.8", pictureUrl: "img/listing/v1.jpg", },
        { id: "2", name: "Onion", description: "Fresh Onion from farms", price: "1.8", pictureUrl: "img/listing/v2.jpg", },
        { id: "3", name: "Cauliflower", description: "Fresh Cauliflower from farms", price: "1", pictureUrl: "img/listing/v5.jpg", },
        { id: "4", name: "Carrot", description: "Fresh Chilli from farms", price: "1", pictureUrl: "img/listing/v6.jpg", },
        { id: "5", name: "Tomato", description: "Fresh Tomato from farms", price: "1", pictureUrl: "img/listing/v3.jpg", },
        { id: "6", name: "Cabbage", description: "Fresh Cabbage from farms", price: "1", pictureUrl: "img/listing/v4.jpg", },
        { id: "7", name: "Start Anise", description: "Fresh Chilli from farms", price: "1", pictureUrl: "img/listing/v7.jpg", },
        { id: "8", name: "Brinjal", description: "Fresh Onion from farms", price: "1.8", pictureUrl: "img/listing/v8.jpg" }
    ]);


    return (
        <>
            <section className="py-4 osahan-main-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="recommend-slider mb-3">
                                <div className="osahan-slider-item">
                                    <img src="img/recommend/r1.jpg" className="img-fluid mx-auto shadow-sm rounded" alt="Responsive image" />
                                </div>
                            </div>
                            <div className="pd-f d-flex align-items-center mb-3">
                                <a href="cart.html" className="btn btn-warning p-3 rounded btn-block d-flex align-items-center justify-content-center mr-3 btn-lg"><i className="icofont-plus m-0 mr-2"></i> ADD TO CART</a>
                                <a href="cart.html" className="btn btn-success p-3 rounded btn-block d-flex align-items-center justify-content-center btn-lg m-0"><i className="icofont-cart m-0 mr-2"></i> BUY NOW</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-4 bg-white rounded shadow-sm">
                                <div className="pt-0">
                                    <h2 className="font-weight-bold">Valencia Orange - Imported</h2>
                                    <p className="font-weight-light text-dark m-0 d-flex align-items-center">
                                        Product MRP : <b className="h6 text-dark m-0">$263.00</b>
                                        <span className="badge badge-danger ml-2">50% OFF</span>
                                    </p>
                                    <a href="review.html">
                                        <div className="rating-wrap d-flex align-items-center mt-2">
                                            <ul className="rating-stars list-unstyled">
                                                <li>
                                                    <i className="icofont-star text-warning"></i>
                                                    <i className="icofont-star text-warning"></i>
                                                    <i className="icofont-star text-warning"></i>
                                                    <i className="icofont-star text-warning"></i>
                                                    <i className="icofont-star"></i>
                                                </li>
                                            </ul>
                                            <p className="label-rating text-muted ml-2 small"> (245 Reviews)</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="pt-2">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="font-weight-bold m-0">Delivery</p>
                                            <p className="text-muted m-0">Free</p>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p className="font-weight-bold m-0">Available in:</p>
                                            <p className="text-muted m-0">1 kg, 2 kg, 5 kg</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="pt-3 bg-white">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-group osahan-radio btn-group-toggle" data-toggle="buttons">
                                                <label className="btn btn-secondary active">
                                                    <input type="radio" name="options" id="option1" defaultChecked /> 4 pcs
                                                </label>
                                                <label className="btn btn-secondary">
                                                    <input type="radio" name="options" id="option2" /> 6 pcs
                                                </label>
                                                <label className="btn btn-secondary">
                                                    <input type="radio" name="options" id="option3" /> 1 kg
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <div className="input-group mb-3 border rounded shadow-sm overflow-hidden bg-white">
                                            <div className="input-group-prepend">
                                                <button className="border-0 btn btn-outline-secondary text-success bg-white"><i className="icofont-search"></i></button>
                                            </div>
                                            <input type="text" className="shadow-none border-0 form-control form-control-lg pl-0" placeholder="Type your city (e.g Chennai, Pune)" aria-label="" aria-describedby="basic-addon1" />
                                        </div>
                                        <p className="font-weight-bold mb-2">Product Details</p>
                                        <p className="text-muted small mb-0">High quality Fresh Orange fruit exporters from South Korea for sale. All citrus trees belong to the single genus Citrus and remain almost entirely interfertile. This includes grapefruits, lemons, limes, oranges, and various other types and hybrids. The fruit of any citrus tree is considered a hesperidium, a kind of modified berry; it is covered by a rind wall.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className="mt-3 mb-3">Maybe You Like this.</h5>
                    <div className="row">
                    {products.map(product => (
                                        <ProductCard product={product} key={product.id}/>
                                    ))}
                    </div>
                </div>
            </section>
        </>
    )
}

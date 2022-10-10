import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {



    // set default theme
    useEffect(() => {
        console.log(product);
    }, [product]);


    return (
        <>
            <div className="col-6 col-md-3 mb-3">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                        <Link to='/productdetails' className="text-dark">
                            <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">10%</span></div>
                            <div className="p-3">
                                <img src={product.pictureUrl} className="img-fluid item-img w-100 mb-3" />
                                <h6>{product.name}</h6>
                                <div className="d-flex align-items-center">
                                    <h6 className="price m-0 text-success">${product.price}/kg</h6>
                                    <Link to='/' data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" className="btn btn-success btn-sm ml-auto">+</Link>
                                    <div className="collapse qty_show" id="collapseExample1">
                                        <div>
                                            <span className="ml-auto" >
                                                <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                                    <input type='button' defaultValue='-' className='qtyminus btn btn-success btn-sm' />
                                                    <input type='text' name='quantity' defaultValue='1' className='qty form-control' />
                                                    <input type='button' defaultValue='+' className='qtyplus btn btn-success btn-sm' />
                                                </form>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


        </>
    )
}

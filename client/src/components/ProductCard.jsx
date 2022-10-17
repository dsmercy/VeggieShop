import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {

    const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // set default theme
    // useEffect(() => {
    //     console.log(product);
    // }, [product]);

    const addtoCart = (product) => {
        setLoading(true);
        setCartItems([...cartItems, 'product.id']);
        localStorage.setItem('cart', 'product.id');
        setTimeout(function () { setLoading(false) }, 2000);
    }


    return (
        <>
            <div className="col-6 col-md-3 mb-3" >
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                        <div className="text-dark">
                            <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">10%</span></div>
                            <div className="p-3">
                                <Link to='/productdetails'><img src={product.pictureUrl} className="img-fluid item-img w-100 mb-3" /></Link>
                                <h6>{product.name}</h6>
                                <div className="d-flex align-items-center">
                                    <h6 className="price m-0 text-success">${product.price}/kg</h6>
                                    {!loading ? <button to='/' className="btn btn-success btn-sm ml-auto" onClick={() => addtoCart(product)}>Add to Cart</button>
                                        : <Button variant="primary" className="btn btn-success btn-sm ml-auto">
                                            <Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Adding...
                                        </Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

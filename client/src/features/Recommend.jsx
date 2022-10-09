import React from 'react'
import { Link } from 'react-router-dom'

export default function Recommend() {
  return (
  <>

<div className="title d-flex align-items-center py-3">
                                <h5 className="m-0">Recommend for You</h5>
                                <Link to='/' className="ml-auto btn btn-outline-success btn-sm" href="recommend.html">26 more</Link>
                            </div>

                            <div className="osahan-recommend">
                                <div className="row">
                                    <div className="col-12 col-md-4 mb-3">
                                        <Link to='/productdetails' className="text-dark text-decoration-none">
                                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                                <div className="recommend-slider2 rounded mb-0">
                                                    <div className="osahan-slider-item m-2 rounded">
                                                        <img src="img/recommend/r3.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image"/>
                                                    </div>
                                                </div>
                                                <div className="p-3 position-relative">
                                                    <h6 className="mb-1 font-weight-bold text-success">
                                                        Fresh Orange
                                                    </h6>
                                                    <p className="text-muted">Orange Great Quality item from Jamaica.</p>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="m-0">$8.8/kg</h6>
                                                        <Link to='/' className="ml-auto" href="#">
                                                            <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                                                <input type='button' defaultValue='-' className='qtyminus btn btn-success btn-sm'  />
                                                                <input type='text' name='quantity' defaultValue='1' className='qty form-control' />
                                                                <input type='button' defaultValue='+' className='qtyplus btn btn-success btn-sm'  />
                                                            </form>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-12 col-md-4 mb-3">
                                        <Link to='/productdetails' className="text-dark text-decoration-none">
                                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                                <div className="recommend-slider2 rounded mb-0">
                                                    <div className="osahan-slider-item m-2">
                                                        <img src="img/recommend/r6.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image"/>
                                                    </div>
                                                </div>
                                                <div className="p-3 position-relative">
                                                    <h6 className="mb-1 font-weight-bold text-success">Green Apple</h6>
                                                    <p className="text-muted">Green Apple Premium item from Vietnam.</p>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="m-0">$10.8/kg</h6>
                                                        <Link to='/' className="ml-auto" href="#">
                                                            <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                                                <input type='button' defaultValue='-' className='qtyminus btn btn-success btn-sm'  />
                                                                <input type='text' name='quantity' defaultValue='1' className='qty form-control' />
                                                                <input type='button' defaultValue='+' className='qtyplus btn btn-success btn-sm'  />
                                                            </form>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-12 col-md-4 mb-3">
                                        <Link to='/productdetails' className="text-dark text-decoration-none">
                                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                                <div className="recommend-slider2 rounded mb-0">
                                                    <div className="osahan-slider-item m-2">
                                                        <img src="img/recommend/r9.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image"/>
                                                    </div>
                                                </div>
                                                <div className="p-3 position-relative">
                                                    <h6 className="mb-1 font-weight-bold text-success">
                                                        Fresh Apple
                                                    </h6>
                                                    <p className="text-muted">Fresh Apple Premium item from Thailand.</p>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="m-0">$12.8/kg</h6>
                                                        <Link to='/' className="ml-auto" href="#">
                                                            <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                                                <input type='button' defaultValue='-' className='qtyminus btn btn-success btn-sm'  />
                                                                <input type='text' name='quantity' defaultValue='1' className='qty form-control' />
                                                                <input type='button' defaultValue='+' className='qtyplus btn btn-success btn-sm'  />
                                                            </form>
                                                        </Link>
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

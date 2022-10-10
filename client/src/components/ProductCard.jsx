import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard() {
    return (
        <>

            <div className="title d-flex align-items-center py-3">
                <h5 className="m-0">Pick's Today</h5>
                <Link to='/' className="ml-auto btn btn-outline-success btn-sm" href="picks_today.html">See more</Link>
            </div>

            <div className="pick_today">
                <div className="row">
                    <div className="col-6 col-md-3 mb-3">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to='/productdetails' className="text-dark">
                                    <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">10%</span></div>
                                    <div className="p-3">
                                        <img src="img/listing/v1.jpg" className="img-fluid item-img w-100 mb-3" />
                                        <h6>Chilli</h6>
                                        <div className="d-flex align-items-center">
                                            <h6 className="price m-0 text-success">$0.8/kg</h6>
                                            <Link to='/' data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample1" className="btn btn-success btn-sm ml-auto">+</Link>
                                            <div className="collapse qty_show" id="collapseExample1">
                                                <div>
                                                    <span className="ml-auto">
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
                    <div className="col-6 col-md-3 mb-3">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to='/productdetails' className="text-dark">
                                    <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">5%</span></div>
                                    <div className="p-3">
                                        <img src="img/listing/v2.jpg" className="img-fluid item-img w-100 mb-3" />
                                        <h6>Onion</h6>
                                        <div className="d-flex align-items-center">
                                            <h6 className="price m-0 text-success">$1.8/kg</h6>
                                            <Link to='/' data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" className="btn btn-success btn-sm ml-auto">+</Link>
                                            <div className="collapse qty_show" id="collapseExample2">
                                                <div>
                                                    <span className="ml-auto">
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
                    <div className="col-6 col-md-3 mb-3">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to='/productdetails' className="text-dark">
                                    <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
                                    <div className="p-3">
                                        <img src="img/listing/v5.jpg" className="img-fluid item-img w-100 mb-3" />
                                        <h6>Cauliflower</h6>
                                        <div className="d-flex align-items-center">
                                            <h6 className="price m-0 text-success">$1.8/kg</h6>
                                            <Link to='/' data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" className="btn btn-success btn-sm ml-auto">+</Link>
                                            <div className="collapse qty_show" id="collapseExample3">
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
                    <div className="col-6 col-md-3 mb-3">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to='/productdetails' className="text-dark">
                                    <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
                                    <div className="p-3">
                                        <img src="img/listing/v6.jpg" className="img-fluid item-img w-100 mb-3" />
                                        <h6>Carrot</h6>
                                        <div className="d-flex align-items-center">
                                            <h6 className="price m-0 text-success">$0.8/kg</h6>
                                            <Link to='/' data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4" className="btn btn-success btn-sm ml-auto">+</Link>
                                            <div className="collapse qty_show" id="collapseExample4">
                                                <div>
                                                    <span className="ml-auto">
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
                    <div className="col-6 col-md-3 mb-3">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to='/productdetails' className="text-dark">
                                    <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">5%</span></div>
                                    <div className="p-3">
                                        <img src="img/listing/v3.jpg" className="img-fluid item-img w-100 mb-3" />
                                        <h6>Tomato</h6>
                                        <div className="d-flex align-items-center">
                                            <h6 className="price m-0 text-success">$1/kg</h6>
                                            <Link to='/' className="ml-auto" href="#">
                                                <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                                    <input type='button' defaultValue='-' className='qtyminus btn btn-success btn-sm' />
                                                    <input type='text' name='quantity' defaultValue='1' className='qty form-control' />
                                                    <input type='button' defaultValue='+' className='qtyplus btn btn-success btn-sm' />
                                                </form>
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to='/productdetails' className="text-dark">
                                    <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">15%</span></div>
                                    <div className="p-3">
                                        <img src="img/listing/v4.jpg" className="img-fluid item-img w-100 mb-3" />
                                        <h6>Cabbage</h6>
                                        <div className="d-flex align-items-center">
                                            <h6 className="price m-0 text-success">$0.8/kg</h6>
                                            <Link to='/' data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5" className="btn btn-success btn-sm ml-auto">+</Link>
                                            <div className="collapse qty_show" id="collapseExample5">
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
                    <div className="col-6 col-md-3 mb-3">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to='/productdetails' className="text-dark">
                                    <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">10%</span></div>
                                    <div className="p-3">
                                        <img src="img/listing/v1.jpg" className="img-fluid item-img w-100 mb-3" />
                                        <h6>Chilli</h6>
                                        <div className="d-flex align-items-center">
                                            <h6 className="price m-0 text-success">$0.8/kg</h6>
                                            <Link to='/' data-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6" className="btn btn-success btn-sm ml-auto">+</Link>
                                            <div className="collapse qty_show" id="collapseExample6">
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
                    <div className="col-6 col-md-3 mb-3">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to='/productdetails' className="text-dark">
                                    <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">5%</span></div>
                                    <div className="p-3">
                                        <img src="img/listing/v2.jpg" className="img-fluid item-img w-100 mb-3" />
                                        <h6>Onion</h6>
                                        <div className="d-flex align-items-center">
                                            <h6 className="price m-0 text-success">$1.8/kg</h6>
                                            <Link to='/' data-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample7" className="btn btn-success btn-sm ml-auto">+</Link>
                                            <div className="collapse qty_show" id="collapseExample7">
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
                </div>
            </div>


        </>
    )
}
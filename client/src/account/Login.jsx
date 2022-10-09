import React from 'react'
import { Link } from 'react-router-dom'
import DarkMode from '../layout/DarkMode'

export default function Login() {
    return (
        <>
            <div className="border-bottom p-3 d-none mobile-nav">
                <div className="title d-flex align-items-center">
                    <a href="home.html" className="text-decoration-none text-dark d-flex align-items-center">
                        <img className="osahan-logo mr-2" src="https://askbootstrap.com/" />
                        <h4 className="font-weight-bold text-success m-0">Grocery</h4>
                    </a>
                    <p className="ml-auto m-0">
                        <a href="listing.html" className="text-decoration-none bg-white p-1 rounded shadow-sm d-flex align-items-center">
                            <i className="text-dark icofont-sale-discount"></i>
                            <span className="badge badge-danger p-1 ml-1 small">50%</span>
                        </a>
                    </p>
                    <a className="toggle ml-3" href="#"><i className="icofont-navigation-menu"></i></a>
                </div>
                <a href="search.html" className="text-decoration-none">
                    <div className="input-group mt-3 rounded shadow-sm overflow-hidden bg-white">
                        <div className="input-group-prepend">
                            <button className="border-0 btn btn-outline-secondary text-success bg-white"><i className="icofont-search"></i></button>
                        </div>
                        <input type="text" className="shadow-none border-0 form-control pl-0" placeholder="Search for Products.." aria-label="" aria-describedby="basic-addon1" />
                    </div>
                </a>
            </div>
          <DarkMode/>

            <section className="osahan-main-body">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center vh-100">
                        <div className="landing-page shadow-sm bg-success col-lg-6">
                            <Link className="position-absolute btn-sm btn btn-outline-light m-4 zindex" to="/">Skip <i className="icofont-bubble-right"></i></Link>
                            <div className="osahan-slider m-0">
                                <div className="osahan-slider-item text-center">
                                    <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                                        <i className="icofont-sale-discount display-1 text-warning"></i>
                                        <h4 className="my-4 text-white">Best Prices & Offers</h4>
                                        <p className="text-center text-white-50 mb-5 px-4">Cheaper prices than your local<br />supermarket, great cashback offers to top it off.</p>
                                    </div>
                                </div>
                                <div className="osahan-slider-item text-center">
                                    <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                                        <i className="icofont-cart display-1 text-warning"></i>
                                        <h4 className="my-4 text-white">Wide Assortment</h4>
                                        <p className="text-center text-white-50 mb-5 px-4">Choose from 5000+ products across food<br />, personal care, household & other categories.</p>
                                    </div>
                                </div>
                                <div className="osahan-slider-item text-center">
                                    <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                                        <i className="icofont-support-faq display-1 text-warning"></i>
                                        <h4 className="my-4 text-white">Easy Returns</h4>
                                        <p className="text-center text-white-50 mb-5 px-4">Not satisfied with a product? Return<br /> it at the doorstep & get a refund within hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-lg-5">
                            <div className="osahan-signup shadow bg-white p-4 rounded">
                                <div className="p-3">
                                    <h2 className="my-0">Let's get started</h2>
                                    <p className="small mb-4">Create account to see our top picks for you!</p>
                                    <form action="https://askbootstrap.com/preview/vegishop/verification.html">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Name</label>
                                            <input placeholder="Enter Name" type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputNumber1">Phone Number</label>
                                            <input placeholder="Enter Phone Number" type="number" className="form-control" id="exampleInputNumber1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <input placeholder="Enter Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input placeholder="Enter Password" type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword2">Confirmation Password</label>
                                            <input placeholder="Enter Confirmation Password" type="password" className="form-control" id="exampleInputPassword2" />
                                        </div>
                                        <button type="submit" className="btn btn-success rounded btn-lg btn-block">Create Account</button>
                                    </form>
                                    <p className="text-muted text-center small py-2 m-0">or</p>
                                    <a href="verification.html" className="btn btn-dark btn-block rounded btn-lg btn-apple">
                                        <i className="icofont-brand-apple mr-2"></i> Sign up with Apple
                                    </a>
                                    <a href="verification.html" className="btn btn-light border btn-block rounded btn-lg btn-google">
                                        <i className="icofont-google-plus text-danger mr-2"></i> Sign up with Google
                                    </a>
                                    <p className="text-center mt-3 mb-0"><a href="signin.html" className="text-dark">Already have an account! Sign in</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <nav id="main-nav">
                <ul className="second-nav">
                    <li><a href="home.html"><i className="icofont-smart-phone mr-2"></i> Home</a></li>
                    <li>
                        <a href="#"><i className="icofont-login mr-2"></i> Authentication</a>
                        <ul>
                            <li><a className="dropdown-item" href="signin.html">Sign In</a></li>
                            <li><a className="dropdown-item" href="signup.html">Sign Up</a></li>
                            <li><a href="verification.html">Verification</a></li>
                        </ul>
                    </li>
                    <li><a className="dropdown-item" href="listing.html">Listing</a></li>
                    <li><a className="dropdown-item" href="product_details.html">Detail</a></li>
                    <li><a className="dropdown-item" href="picks_today.html">Trending</a></li>
                    <li><a className="dropdown-item" href="recommend.html">Recommended</a></li>
                    <li><a className="dropdown-item" href="fresh_vegan.html">Most Popular</a></li>
                    <li><a className="dropdown-item" href="cart.html">Cart</a></li>
                    <li><a className="dropdown-item" href="checkout.html">Checkout</a></li>
                    <li><a className="dropdown-item" href="successful.html">Successful</a></li>
                    <li>
                        <a href="#"><i className="icofont-sub-listing mr-2"></i> My Order</a>
                        <ul>
                            <li><a className="dropdown-item" href="my_order.html">My order</a></li>
                            <li><a className="dropdown-item" href="status_complete.html">Status Complete</a></li>
                            <li><a className="dropdown-item" href="status_onprocess.html">Status on Process</a></li>
                            <li><a className="dropdown-item" href="status_canceled.html">Status Canceled</a></li>
                            <li><a className="dropdown-item" href="review.html">Review</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i className="icofont-ui-user mr-2"></i> My Account</a>
                        <ul>
                            <li><a className="dropdown-item" href="my_account.html">My account</a></li>
                            <li><a className="dropdown-item" href="promos.html">Promos</a></li>
                            <li><a className="dropdown-item" href="my_address.html">My address</a></li>
                            <li><a className="dropdown-item" href="terms_conditions.html">Terms & conditions</a></li>
                            <li><a className="dropdown-item" href="help_support.html">Help & support</a></li>
                            <li><a className="dropdown-item" href="help_ticket.html">Help ticket</a></li>
                            <li><a className="dropdown-item" href="signin.html">Logout</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i className="icofont-page mr-2"></i> Pages</a>
                        <ul>
                            <li><a className="dropdown-item" href="verification.html">Verification</a></li>
                            <li><a className="dropdown-item" href="promos.html">Promos</a></li>
                            <li><a className="dropdown-item" href="promo_details.html">Promo Details</a></li>
                            <li><a className="dropdown-item" href="terms_conditions.html">Terms & Conditions</a></li>
                            <li><a className="dropdown-item" href="privacy.html">Privacy</a></li>
                            <li><a className="dropdown-item" href="terms%26conditions.html">Conditions</a></li>
                            <li><a className="dropdown-item" href="help_support.html">Help Support</a></li>
                            <li><a className="dropdown-item" href="help_ticket.html">Help Ticket</a></li>
                            <li><a className="dropdown-item" href="refund_payment.html">Refund Payment</a></li>
                            <li><a className="dropdown-item" href="faq.html">FAQ</a></li>
                            <li><a className="dropdown-item" href="signin.html">Sign In</a></li>
                            <li><a className="dropdown-item" href="signup.html">Sign Up</a></li>
                            <li><a className="dropdown-item" href="search.html">Search</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i className="icofont-link mr-2"></i> Navigation Link Example</a>
                        <ul>
                            <li>
                                <a href="#">Link Example 1</a>
                                <ul>
                                    <li>
                                        <a href="#">Link Example 1.1</a>
                                        <ul>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Link Example 1.2</a>
                                        <ul>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                            <li><a href="#">Link</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">Link Example 2</a></li>
                            <li><a href="#">Link Example 3</a></li>
                            <li><a href="#">Link Example 4</a></li>
                            <li data-nav-custom-content>
                                <div className="custom-message">
                                    You can add any custom content to your navigation items. This text is just an example.
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="bottom-nav">
                    <li className="email">
                        <a className="text-success" href="home.html">
                            <p className="h5 m-0"><i className="icofont-home text-success"></i></p>
                            Home
                        </a>
                    </li>
                    <li className="github">
                        <a href="cart.html">
                            <p className="h5 m-0"><i className="icofont-cart"></i></p>
                            CART
                        </a>
                    </li>
                    <li className="ko-fi">
                        <a href="help_ticket.html">
                            <p className="h5 m-0"><i className="icofont-headphone"></i></p>
                            Help
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="modal fade right-modal" id="login" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header p-0">
                            <nav className="schedule w-100">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-link active col-5 py-4" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
                                        <p className="mb-0 font-weight-bold">Sign in</p>
                                    </a>
                                    <a className="nav-link col-5 py-4" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">
                                        <p className="mb-0 font-weight-bold">Sign up</p>
                                    </a>
                                    <a className="nav-link col-2 p-0 d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                                        <h1 className="m-0 h4 text-dark"><i className="icofont-close-line"></i></h1>
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div className="modal-body p-0">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="osahan-signin p-4 rounded">
                                        <div className="p-2">
                                            <h2 className="my-0">Welcome Back</h2>
                                            <p className="small mb-4">Sign in to Continue.</p>
                                            <form action="https://askbootstrap.com/preview/vegishop/verification.html">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email</label>
                                                    <input placeholder="Enter Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input placeholder="Enter Password" type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <button type="submit" className="btn btn-success btn-lg rounded btn-block">Sign in</button>
                                            </form>
                                            <p className="text-muted text-center small m-0 py-3">or</p>
                                            <a href="verification.html" className="btn btn-dark btn-block rounded btn-lg btn-apple">
                                                <i className="icofont-brand-apple mr-2"></i> Sign up with Apple
                                            </a>
                                            <a href="verification.html" className="btn btn-light border btn-block rounded btn-lg btn-google">
                                                <i className="icofont-google-plus text-danger mr-2"></i> Sign up with Google
                                            </a>
                                            <p className="text-center mt-3 mb-0"><a href="signup.html" className="text-dark">Don't have an account? Sign up</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="osahan-signup bg-white p-4">
                                        <div className="p-2">
                                            <h2 className="my-0">Let's get started</h2>
                                            <p className="small mb-4">Create account to see our top picks for you!</p>
                                            <form action="https://askbootstrap.com/preview/vegishop/verification.html">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputName1">Name</label>
                                                    <input placeholder="Enter Name" type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputNumber1">Phone Number</label>
                                                    <input placeholder="Enter Phone Number" type="number" className="form-control" id="exampleInputNumber1" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email</label>
                                                    <input placeholder="Enter Email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input placeholder="Enter Password" type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword2">Confirmation Password</label>
                                                    <input placeholder="Enter Confirmation Password" type="password" className="form-control" id="exampleInputPassword2" />
                                                </div>
                                                <button type="submit" className="btn btn-success rounded btn-lg btn-block">Create Account</button>
                                            </form>
                                            <p className="text-muted text-center small py-2 m-0">or</p>
                                            <a href="verification.html" className="btn btn-dark btn-block rounded btn-lg btn-apple">
                                                <i className="icofont-brand-apple mr-2"></i> Sign up with Apple
                                            </a>
                                            <a href="verification.html" className="btn btn-light border btn-block rounded btn-lg btn-google">
                                                <i className="icofont-google-plus text-danger mr-2"></i> Sign up with Google
                                            </a>
                                            <p className="text-center mt-3 mb-0"><a href="signin.html" className="text-dark">Already have an account! Sign in</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer p-0 border-0">
                            <div className="col-6 m-0 p-0">
                                <a href="#" className="btn border-top border-right btn-lg btn-block" data-dismiss="modal">Close</a>
                            </div>
                            <div className="col-6 m-0 p-0">
                                <a href="help_support.html" className="btn border-top btn-lg btn-block">Help</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import "../style/contactus.scss";
import img from "../images/bg-contact.webp"

function Contactus() {
    return (
        // here is contact form 
        <div className="container-fluid contact" id='contact'>
            <div className="row my-2">
                <div className="col-12 col-md-6 px-0">
                    {/* this is contact image */}
                    <img src={img} alt="" className='img-fluid w-100 h-100' />
                </div>

                {/* this  is all contact form  */}
                <div className="col-12 col-md-6 ps-0 ">
                    <div className="card p-3 border-0 rounded-0 py-5">

                        <div className="row mb-3">
                            <div className="col text-center">
                        
                                <p className='text-primary m-0 fw-bold'>BOOK APPOINTMENT</p>
                                <h2 className='heading fs-sm-2'>Get a free quote</h2>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-12 col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Full Name" />

                                </div>

                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="Your Email" />

                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-12 col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" id="floatingInput" placeholder="Your phone number" />

                                </div>

                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" id="floatingInput" placeholder="Your Zip code" />

                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col ">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select your service</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col">
                                <button className='btn btn-group-lg btn-warning rounded-0 px-4 py-3 text-uppercase  ' id='color-change'>Request a Quote Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contactus
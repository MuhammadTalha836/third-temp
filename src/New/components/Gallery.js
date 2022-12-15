import React from 'react'
import '../style/gallery.scss'
//import logo from "../images/service-image-one.png"
import { GoHome } from "react-icons/go"
import img from '../images/left-img.jpg'
function Gallery() {
    return (

        <div className="serviceOne">
            <div >
                <div className="service-image">
                    <img src={img} alt="" />
                </div>
                <div className="service-content">
                    <div>
                        <h1>Professional Service Ready For Your Moving Plan</h1>
                        <p>Nulla nec id velit vitae rhoncus porta tellus ultrices sociosqu. Ornare orci in consequat ad magna efficitur praesent. Tellus duis letius pede nullam pretium dui in nec quam.</p>

                        <div className="cards">
                            <div className="card">

                                <div className="card-content">
                                    <div className="card-icons">
                                        <GoHome className='icon' />
                                    </div>
                                    <div className="card-data">
                                        <h5>Muhammad talha</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, odio consectetur</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">

                                <div className="card-content">
                                    <div className="card-icons">
                                        <GoHome className='icon' />
                                    </div>
                                    <div className="card-data">
                                        <h5>Muhammad talha</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, odio consectetur</p>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className="cards">
                            <div className="card">

                                <div className="card-content">
                                    <div className="card-icons">
                                        <GoHome className='icon' />
                                    </div>
                                    <div className="card-data">
                                        <h5>Muhammad talha</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, odio consectetur</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">

                                <div className="card-content">
                                    <div className="card-icons">
                                        <GoHome className='icon' />
                                    </div>
                                    <div className="card-data">
                                        <h5>Muhammad talha</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, odio consectetur</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="cards">
                            <div className="card">

                                <div className="card-content">
                                    <div className="card-icons">
                                        <GoHome className='icon' />
                                    </div>
                                    <div className="card-data">
                                        <h5>Muhammad talha</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, odio consectetur</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card">

                                <div className="card-content">
                                    <div className="card-icons">
                                        <GoHome className='icon' />
                                    </div>
                                    <div className="card-data">
                                        <h5>Muhammad talha</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, odio consectetur</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Gallery
import React from 'react'
import "../style/services.scss";
import { GoHome } from "react-icons/go"
import { BsSnow } from "react-icons/bs"
import img from "../images/service_4.jpg"

function Service() {
    return (
        // here is service complete secion
        <div className="service container" id='service'>
            {/* service header here */}
            <div className="service-header">
                <div className='service-content'>
                    <div className='icon'><BsSnow size="50px" /></div>
                    <p className="small-paragraph">WHAT WE DO</p>
                    <h2>Services we offer</h2>
                    <span>
                        <hr />
                    </span>
                </div>
            </div>

            {/* service cards is here */}

            <div className="service-cards">

                {/* all cards in there section */}
                <div className="cards">

                    {/* this is a card */}
                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-image">
                                <img src={img} alt="" />
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Freezer</h3>
                                <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-image">
                                <img src={img} alt="" />
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Freezer</h3>
                                <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-image">
                                <img src={img} alt="" />
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Freezer</h3>
                                <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-image">
                                <img src={img} alt="" />
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Freezer</h3>
                                <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                                <button>Read more</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>

    )
}

export default Service
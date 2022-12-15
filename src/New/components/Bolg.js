import React from 'react'
import { BsSnow } from "react-icons/bs"
import img from "../images/blog2.jpg"
import "../style/bolg.scss"
function Bolg() {
    return (
        // here is service complete secion
        <div className="bolg container" id='blog'>
            {/* service header here */}
            
            <div className="bolg-header">
                <div className='bolg-content'>
                    <div className='icon'><BsSnow size="50px" /></div>
                    <p className="small-paragraph">NEWS AND UPDATES</p>
                    <h2>Recent blog posts</h2>
                    <span>
                        <hr />
                    </span>
                </div>
            </div>

            {/* bolg cards is here */}

            <div className="bolg-cards">

                {/* all cards in there section */}
                <div className="cards">

                    {/* this is a card */}
                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-image">
                                <img src={img} alt="" />
                                <p>August 20 , 2019</p>
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Refrigerator is making strange noises</h3>
                                <p>If the seal on your commercial refrigerator is old, or it’s simply not working properly.</p>
                              
                            </div>
                        </div>
                    </div>


                    {/* this is a card */}
                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-image">
                                <img src={img} alt="" />
                                <p>August 20 , 2019</p>
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Refrigerator is making strange noises</h3>
                                <p>If the seal on your commercial refrigerator is old, or it’s simply not working properly.</p>
                             
                            </div>
                        </div>
                    </div>


                    {/* this is a card */}
                    <div className="card">
                        <div className="card-content">

                            {/* this is icon section */}
                            <div className="card-image">
                                <img src={img} alt="" />
                                <p>August 20 , 2019</p>
                            </div>

                            {/* this  is card data section */}
                            <div className="card-data">
                                <h3>Refrigerator is making strange noises</h3>
                                <p>If the seal on your commercial refrigerator is old, or it’s simply not working properly.</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bolg
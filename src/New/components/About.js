import React from 'react'
import "../style/about.scss"
import { BsSnow } from "react-icons/bs"
function About() {
    return (
        <div className="about" id="about">
            {/* about content container */}
            <div className="about-content container" data-aos="fade-up" data-aos-duration="800">
                {/* about header */}
                <div className='about-header'>
                    <BsSnow className='icon' />
                    <p>WHY YOU SHOULD CHOOSE US</p>
                    <h1>Reasons to choose refix</h1>


                    {/* About cards row */}
                    <div className="cards">

                        {/* a single card */}
                        <div className="card">
                            <div className="card-content">
                                <BsSnow className='icon' />
                                <p>Qualified Experts</p>
                            </div>
                        </div>
                        {/* a single card */}
                        <div className="card">
                            <div className="card-content">
                                <BsSnow className='icon' />
                                <p>Qualified Experts</p>
                            </div>
                        </div>
                        {/* a single card */}
                        <div className="card">
                            <div className="card-content">
                                <BsSnow className='icon' />
                                <p>Qualified Experts</p>
                            </div>
                        </div>

                        {/* a single card */}
                        <div className="card">
                            <div className="card-content">
                                <BsSnow className='icon' />
                                <p>Qualified Experts</p>
                            </div>
                        </div>

                        {/* a single card */}
                        <div className="card">
                            <div className="card-content">
                                <BsSnow className='icon' />
                                <p>Qualified Experts</p>
                            </div>
                        </div>
                        {/* a single card */}
                        <div className="card">
                            <div className="card-content">
                                <BsSnow className='icon' />
                                <p>Qualified Experts</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
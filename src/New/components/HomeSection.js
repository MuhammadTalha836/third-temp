import React from 'react'
import "../style/header.scss";

function HomeSection() {
    return (
        //here is the main container with background picture
        <div className="home-Header" id="home">
            {/* home content container */}
            <div className="home-content container" data-aos="fade-up" data-aos-duration="800">
                <div className='home-data'>
                    {/* home header */}
                    <p>Committed to top quality services</p>
                    <h1>Freezer, ice maker and refrigertor repair services</h1>
                    {/* home button */}
                    <button>Book Online</button>
                </div>
            </div>
        </div>
    )
}

export default HomeSection
import React from 'react'
import "../style/details.scss"
import { BsSnow } from "react-icons/bs"
import {TiTick} from "react-icons/ti"
function Details() {
    return (

        // here is detail section 
        <div className="detail" id='detail'>

            {/* detail Content is here */}
            <div className="detailContent">
                <div>
                    <BsSnow className='icon' />
                    <p className='paragrahp'>CLEANING SERVICES</p>
                    <h1>How to keep hygiene in our fridge and freezer</h1>
                    <p>In order to maintain the good hygiene of our foods, favorite drinks and products, it is advisable to clean the fridge once a month. This way, we will avoid creating a mess of foods that show off bad odors and harmful bacteria that are inside your fridge or freezer</p>
                    <p className='option'><span><TiTick className='icon'/>Remove unpleasant smells</span></p>
                    <p className='option'><span><TiTick className='icon'/>Remove unpleasant smells</span></p>
                    <p className='option'><span><TiTick className='icon'/>Remove unpleasant smells</span></p>
                    <p className='option'><span><TiTick className='icon'/>Remove unpleasant smells</span></p>

                </div>
            </div>

            {/* Detail image is here
             */}
            <div className="detailImage">

            </div>
        </div>
    )
}

export default Details
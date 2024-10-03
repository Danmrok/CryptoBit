import React from "react";
import './Platform.sass';
import { HandySvg } from 'handy-svg';
import bitcoin from '../Images/bit.svg'
import looper from '../Images/Looper_4.svg';


const Platform = () => {
    return(
        <div className="platform">
            <div className="wrapper">
                <HandySvg
                        src={bitcoin}
                        className="photo"
                        width="513"
                        height="591"
                        fill = "none"
                 />
                <div className="block">
                    <span className="h1text">Our platform offers  levels of <span className="h1_1text">security</span> to protect your founds.</span>
                    <span className="h2text">Start investing with confidence. Our team is here to provide you with the guidance and support you need to make the most of your investments.</span>
                    <button className="buttons">Learn More</button>
                </div>
                <div className="looper">
                        <HandySvg 
                            src={looper}
                            className="loopers"
                            width="863"
                            height="884"
                            fill="none"
                        />
                </div>
            </div>
        </div>
    )
}



export default Platform
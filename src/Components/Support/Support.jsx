import React from "react";
import './Support.sass';
import { HandySvg } from 'handy-svg';
import bitctoinbig from '../Images/Img.svg'
import looper from '../Images/Looper_3.svg';



const Support = () => {
    return(
        <div className="support">
            <div className="wrapper">
                <HandySvg
                        src={bitctoinbig}
                        className="photo"
                        width="622"
                        height="528"
                        fill = "none"
                 />
                <div className="block">
                    <span className="h1text"><span className="h1_1text">24/7</span> access to customer support</span>
                    <span className="h2text">Invest in digital assets with peace of mind. Our secure platform offers industry-leading security to protect your founds.</span>
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

export default Support
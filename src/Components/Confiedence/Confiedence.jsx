import React from "react";
import './Confiedence.sass';
import { HandySvg } from 'handy-svg';
import bitctoinbig from '../Images/bitcoinbig.svg'



const Confiedence = () => {
    return(
        <div className="confiedence">
            <div className="wrapper">
                <HandySvg
                    src={bitctoinbig}
                    className="photo"
                    width="513"
                    height="513"
                    fill = "none"
                />
                <div className="block">
                    <span className="h1text">Trade with confidence with <span className="h1_1text">our platform</span> and easy to use.</span>
                    <span className="h2text">Stay up-to-date with the latest news and trends in the crypto space. Follow our market insights to make informed decisions.</span>
                    <button className="buttons">Explore Now</button>
                </div>
            </div>
        </div>
    )
}



export default Confiedence
import React from "react";
import './Secures.sass';
import {HandySvg} from 'handy-svg';

import bitcoin from '../Images/bitcoin.svg';
import atom from '../Images/atom.svg';
import ink from '../Images/ink.svg';
import looper from '../Images/Looper_2.svg';


const Secure = () => {

    const inform = [
        {
            id: 1,
            image: bitcoin, 
            name: "Invest in crypto",
            description: 'Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform.'
          },
          {
            id: 2,
            image: atom,
            name: "Fast Transaction",
            description: 'Invest in cryptocurrency with our secure and easy-to-use online platform. With 24/7 access to full service customer support, you can trade with confidence.'
          },
          {
            id: 3,
            image: ink,
            name: "Secure",
            description: 'Gain access to a variety of digital assets with just a few clicks. Our intuitive platform makes it easy to buy, sell, and store your cryptocurrency.'
          }
    ];

    return(
        <div className="secures">
            <div className="wrapper">
                    <div className="textls">
                        <span className="sc">Secure & Private</span>
                        <span className="st">24/7 Dedicated Support Team</span>
                    </div>
                    <div className="block">
                    {inform.map(inform => (
                        <div key={inform.id} className="card">
                            <HandySvg
                            className="photo" 
                            src={inform.image}
                            fill="none"
                            width="105"
                            height="98"
                            filter= "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5))"
                        />
                        <h1 className="name">{inform.name}</h1>
                        <p className="description">{inform.description}</p>
                        <span className="buttons">Get Started  </span>
                        </div>
                    ))}
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

export default Secure;
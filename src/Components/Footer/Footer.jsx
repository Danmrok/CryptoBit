import React from "react";
import './Footer.sass';

import { HandySvg } from 'handy-svg';
import logo from '../Images/logo.svg';
import phone from '../Images/phone.svg';
import buttons from '../Images/Buttons.svg';
import socials from '../Images/Socials.svg';
import sms from '../Images/sms.svg';

const Footer = () => {
    return(
        <div className="footer">
            <div className="wrapper">
                <div className="blockinfo">
                    <HandySvg
                        src={logo}
                        className="icon"
                        width="75"
                        height="75"
                        fill = "none"
                    />
                    <span className="opys">Cryptocurrency has revolutionized the world of finance and digital transactions, providing individuals with a decentralized and secure way to store, transfer, and manage their wealth</span>
                    <div className="contactus">
                        <div className="phones">
                        <HandySvg
                        src={phone}
                        className="icon"
                        width="50"
                        height="50"
                        fill = "none" />
                        <div className="questions">
                            <span>Have a Question?</span>
                            <span className="number">310-437-2766</span>
                        </div>
                        </div>
                        <div className="phones">
                        <HandySvg
                            src={buttons}
                            className="icon"
                            width="50"
                            height="50"
                            fill = "none" />
                        <div className="questions">
                            <span>Contact Us at</span>
                            <span className="number">unreal@outlook.com</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="subscribe">
                    <div className="subrender">
                    <div className="text">
                        <span className="txtsub">Subscribe</span>
                        <span className="txtdesc">Stay up-to-date on discounts, offers and events. Unsubscribe at any time.</span>
                    </div>
                    <div className="form">
                        <HandySvg
                            src={sms}
                            className="icon"
                            width="18"
                            height="16"
                            fill = "none" />
                        <input type="text" className="include" placeholder="Enter your Email" />
                        <button className="submit">Submit</button>
                    </div>
                    </div>
                    <div className="scnetwork">
                        <HandySvg
                            src={socials}
                            className="icon"
                            width="280"
                            height="55"
                            fill = "none" />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer;
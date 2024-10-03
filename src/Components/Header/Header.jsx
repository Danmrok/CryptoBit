import React from "react";
import './Header.sass'
import logo from '../Images/logo.svg'
import {HandySvg} from 'handy-svg';
import { Link } from "react-scroll";


const Header = () => {

    return(
        <header>
        <div className="header">
            <div className="wrapper">
            <HandySvg
                src={logo}
                className="icon"
                width="75"
                height="75"
                fill = "none"
            />
            <ul className="navbar">
                 <Link
                 activeClass="active"
                 to="home" 
                 spy={true} 
                 smooth={true} 
                 offset={0} 
                 duration={500}>
                <li className="navbar-item">Home</li>
                </Link>
                 <Link
                 activeClass="active"
                 to="secures" 
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}>
                <li className="navbar-item">NFT Market</li>
                </Link>
                 <Link
                 activeClass="active"
                 to="platform"
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500}>
                <li className="navbar-item">Shop</li>
                </Link>
                  <Link
                 activeClass="active"
                 to="footer" 
                 spy={true} 
                 smooth={true} 
                 offset={0} 
                 duration={500}>
                <li className="navbar-item">About Us</li>
               </Link>
            </ul>

            <button className="explore">Explore Now</button>
            </div>
        </div>
        </header>
    );

}



export default Header;
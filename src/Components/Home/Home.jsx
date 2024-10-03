import React from "react";
import './Home.sass';
import {HandySvg} from 'handy-svg';
import nft from '../Images/nft.svg';
import avatars from '../Images/avatars.svg';
import looper from '../Images/Looper_1.svg';


const Home = () =>{
    return(
      
        <div className="home">
            <div className="wrapper">
                <div className="block">
                  <span className="texth1">Explore The Largest <span className="nft_color">NFT</span> Marketplaces</span>
                  <span className="texth2">Buy, Sell & Trade Cryptocurrency Easily and Securely</span>
                  <div  className="buttons">
                    <button className="wallet">Connect Wallet</button>
                    <button className="more">Learn More</button>
                  </div>
                  <div className="blockour">
                    <span className="members">Our Members</span>
                    <HandySvg 
                        src={avatars}
                        className="avatars"
                        width="191"
                        height="53"
                        fill="#FFF"
                   />
                  </div>
                </div>
                <div className="photo">
                <HandySvg 
                    src={nft}
                    className="nft"
                    width="618"
                    height="644"
                    fill="#FFF"
                  />
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


export default Home;




    // const products = [
    //     {
    //       id: 1,
    //       image: logo, // Здесь должна быть ссылка на реальное изображение
    //       description: 'Product 1 description'
    //     },
    //     {
    //       id: 2,
    //       image: logo,
    //       description: 'Product 2 description'
    //     },
    //     {
    //       id: 3,
    //       image: logo,
    //       description: 'Product 3 description'
    //     },
    //     {
    //       id: 4,
    //       image: logo,
    //       description: 'Product 4 description'
    //     },
    //     {
    //       id: 5,
    //       image: logo,
    //       description: 'Product 5 description'
    //     },
    //     {
    //       id: 6,
    //       image: logo,
    //       description: 'Product 6 description'
    //     }
    //   ];
import React from "react";
import './Wallet.sass';
import { HandySvg } from 'handy-svg';

import b from '../Images/b.svg';
import block from '../Images/block.svg';
import c from '../Images/c.svg';
import e from '../Images/e.svg';
import f from '../Images/f.svg';
import h from '../Images/h.svg';
import s from '../Images/s.svg';



const Wallet = () => {

    const inform = [
        { id: 1, image: s, name: "Bitcoin", type: "Investmen", profit: "Profit", cost: "12,000$", percent: "3.99%"},
        { id: 2, image: b, name: "Bitcoin", type: "Investmen", profit: "Profit", cost: "12,000$", percent: "3.99%"},
        { id: 3, image: e, name: "Bitcoin", type: "Investmen", profit: "Profit", cost: "12,000$", percent: "3.99%"},
        { id: 4, image: f, name: "Bitcoin", type: "Investmen", profit: "Profit", cost: "12,000$", percent: "3.99%"},
        { id: 5, image: e, name: "Bitcoin", type: "Investmen", profit: "Profit", cost: "12,000$", percent: "3.99%"},
    ];
    const inform2 = [
        { id: 1, image: c, name: "Bitcoin", type: "Investmen", profit: "Profit", cost: "12,000$", percent: "3.99%"},
        { id: 2, image: block, name: "Bitcoin", type: "Investmen", profit: "Profit", cost: "12,000$", percent: "3.99%"},
        { id: 3, image: h, name: "Bitcoin", type: "Investmen", profit: "Profit", cost: "12,000$", percent: "3.99%"},
        { id: 4, image: b, name: "Bitcoin", type: "Investmen", profit: "Profit", cost: "12,000$", percent: "3.99%"},
        { id: 5, image: e, name: "Bitcoin", type: "Investmen", profit: "Profit", cost: "12,000$", percent: "3.99%"},
    ];


    return(
        <div className="wallet">
            <div className="wrapper">
                <div className="text">
                    <span>Use Money in your wallet</span>
                    <span className="opys">Cryptocurrency is a digital form of currency that utilizes cryptography to secure transactions, control the creation of new units, and verify the transfer of assets</span>
                </div>
                <div className="block">
                    {inform.map(inform => (
                            <div key={inform.id} className="card">
                                <HandySvg
                                className="photo" 
                                src={inform.image}
                                fill="none"
                                width="33"
                                height="33"
                                />   
                                <div className="table">
                                    <div className="row1">
                                        <span>{inform.name}</span>
                                        <div className="profit">
                                            <span className="liner">{inform.profit}</span>
                                            <span className="colores">{inform.percent}</span>
                                        </div>
                                    </div>
                                    <div className="row2">
                                        <span className="liner">{inform.type}</span>
                                        <span className="colores">{inform.cost}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="block1">
                    {inform2.map(inform2 => (
                            <div key={inform2.id} className="card1">
                                <HandySvg
                                className="photo1" 
                                src={inform2.image}
                                fill="none"
                                width="33"
                                height="33"
                                />   
                                <div className="table1">
                                    <div className="row1">
                                        <span>{inform2.name}</span>
                                        <div className="profit">
                                            <span className="liner">{inform2.profit}</span>
                                            <span className="colores">{inform2.percent}</span>
                                        </div>
                                    </div>
                                    <div className="row2">
                                        <span className="liner">{inform2.type}</span>
                                        <span className="colores">{inform2.cost}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}


export default Wallet
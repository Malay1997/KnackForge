import React from 'react'
import './Banner.css';
import banner from '../images/banner.jpg';

export default function Banner() {
    return (
        <div className="banner">
            <img className="banner-img" src={banner} alt="banner" width="300px"></img>
            <div className="text">
                <h1>Trust is earned <br/>through experience <br/><span className="red">let us earn yours</span></h1>
                <p> Enterprise software solutions for business <br/>growth and performance</p>
                <button className="btn-viewmore">View more </button>
            </div> 
        </div>
    )
}

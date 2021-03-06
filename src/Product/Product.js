import React from 'react'
import './Product.css';
import { FaSquareFull } from "react-icons/fa";

const Product = props => {
    return (
      <>  
        <div className="product">
            <div className="number">
                <FaSquareFull color="rgb(240, 72, 72)" size="lg"/><p>{props.no}<span className="grey">/03</span></p>
            </div>
            <div className="space"></div>    
        </div>
        <div className="product-text">
            <div className="text-left">
                <p className="grey">{props.para1}</p>
            </div>    
            <div className="text-right">
                <h1>{props.head1}</h1>
            </div>        
        </div>
        <div className="product-pic">
            <div className="picture">
                <img className="product-image" src={`/images/${props.img}.jpg`} alt="Product Image" width="300px"></img>
            </div>
            <div className="text-more">
                <h2>{props.h1}</h2>
                <p className="grey">{props.p1}</p>
                <button>Details</button>
            </div>        
        </div>    
      </>
    )
}

export default Product;
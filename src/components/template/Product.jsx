import React from 'react'

export default function Product(props){
    return(
        <>
            <div className="product">
                <h2 className="product-price">{props.price}</h2>
                <div className="product-img">
                    <img src={props.img} alt="" />
                </div>
            </div>
        </>
    )
}
import React from 'react'

export default function Product(props){
    return(
        <>
            <div className="product">
                <div className="product-img">
                    <img src={props.img} alt="" />
                </div>
                <div className="detail-wrap">
                    <h2 className="product-q">{props.q}</h2>
                    <h3 className="product-title">{props.title}</h3>
                </div>
            </div>
        </>
    )
}
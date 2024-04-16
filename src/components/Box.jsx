import React from 'react'

import boxImg from '../assets/img/solar.png'

export default function Box(props){
    return(
        <>
            <div className="box">
                <h3 className="box-title"> {props.title}</h3>
                <div className="details">
                    <img className="box-image" src={boxImg} alt="" />
                    <p className="box-subtitle">{props.speed}<span>{props.who}</span></p>
                </div>
            </div>
        </>
    )
}
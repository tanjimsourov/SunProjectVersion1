import React from 'react';
import Sidebar from "../template/Sidebar";
import PlaceHolder from '../../assets/img/logo-left.jpg';
import RightImg from '../../assets/img/logo-right.png';
import Circle from '../../assets/img/circle.png';

export default function ElevenPage(){

    return(
        <>
            <div className="page full-screen background eleven">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar title="Sustainable thanks to solar energy" placeholder={PlaceHolder}/>
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__content">
                                <img src={Circle} className="circle" alt="" />
                                <div className="wraper">
                                    <div className="text-wrapper">
                                        <h2>CO<sub>2</sub> reduction 2023: 133.13 tonnes</h2>
                                        <h2>CO<sub>2</sub> reduction 2024: 9.86 tonnes <br></br>against 3,952 KWH</h2>
                                    </div>
                                </div>
                                <img className="right_logo" src={RightImg} alt="right"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
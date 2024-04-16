import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';

import PlaceHolder from '../../assets/img/floating-img.jpg';
import Sun from '../../assets/img/eart_sun.png';

export default function TwelvePage(){

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar ln="en" placeholder={PlaceHolder}/>
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Facq: ready for the future</h2>
                                <h3 className="sub-title">City: Zaventem</h3>
                                <div className="line"></div>
                            </div> 
                            <div className="wrap">
                                <div className="wrapper twelve-grid">
                                    <div className="grid-col">
                                        <div className="text-wrapper">
                                            <h2 className="text-wrapper-title">Zenith</h2>
                                            <p className="text-wrapper-para">12:35</p>
                                        </div>
                                    </div>
                                    <div className="grid-col">
                                        <div className="text-wrapper">
                                            <h2 className="text-wrapper-title">Sunrise</h2>
                                            <p className="text-wrapper-para">8:15</p>
                                        </div>
                                        <div className="image-wrapper">
                                            <img src={Sun} alt="" />
                                        </div>
                                    </div>
                                    <div className="grid-col">
                                        <div className="text-wrapper">
                                            <h2 className="text-wrapper-title">Heading</h2>
                                            <p className="text-wrapper-para">16:55</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="wrapper">
                                <Copyright />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';
import Sun from '../../assets/img/eart_sun.png';

export default function NlTwelvePage(){

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar ln="nl" placeholder={PlaceHolder}/>
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h3 className="sub-title">Facq: klaar voor de toekomst</h3>
                                <h2 className="title colored">Stad: Zaventem</h2>
                                <div className="line"></div>
                            </div> 
                            <div className="wrap">
                                <div className="wrapper twelve-grid">
                                    <div className="grid-col">
                                        <div className="text-wrapper">
                                            <h2 className="text-wrapper-title">Zenit</h2>
                                            <p className="text-wrapper-para">12:35</p>
                                        </div>
                                    </div>
                                    <div className="grid-col">
                                        <div className="text-wrapper">
                                            <h2 className="text-wrapper-title">Zonsopgang</h2>
                                            <p className="text-wrapper-para">8:15</p>
                                        </div>
                                        <div className="image-wrapper">
                                            <img src={Sun} alt="" />
                                        </div>
                                    </div>
                                    <div className="grid-col">
                                        <div className="text-wrapper">
                                            <h2 className="text-wrapper-title">Zonsondergang</h2>
                                            <p className="text-wrapper-para">16:55</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="wrapper">
                                <Copyright ln="nl" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Car from '../../assets/img/car-worldicon.png'

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';
import Title from '../template/Title';

export default function NlSixthPage(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar ln="nl" placeholder={PlaceHolder}/>
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Vermeden CO&#8322; uitstoot</h2>
                                <h3 className="sub-title">
                                    <Title />
                                </h3>
                                <div className="line"></div>
                            </div> 
                            <div className="wrap">
                                <div className="wrapper">
                                    <h3 className='bold mb-4'>Totaal bespaarde hoeveelheid CO&#8322;: 321t</h3>
                                    <div className="row" style={{height: "90%"}}>
                                        <div className="col-xs-12 col-sm-6">
                                            <h4 style={{fontWeight: 500}} className='mb-4 vh4S'>De vermeden CO&#8322;-uitstoot komt ongeveer overeen met 61,2 maal de wereldomtrek met een (Kleine auto).</h4>
                                            <h4 style={{fontWeight: 500}} className="mb-2 vh4S">Afgelegde afstand: 2,451,085 km</h4>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <img style={{width: "100%"}} src={Car} className='car-globe' alt="" />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="wrapper">
                                <p className='mb-2'>Aardeomtrek 40.074 km</p>
                                <Copyright ln="nl"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
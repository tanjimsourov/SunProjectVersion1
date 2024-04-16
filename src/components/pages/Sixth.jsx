import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Car from '../../assets/img/car-worldicon.png'

export default function Sixth(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar title="" />
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Avoided CO&#8322; emissions</h2>
                                <h3 className="sub-title">This building produces solar energy!</h3>
                                <div className="line"></div>
                            </div> 
                            <div className="wrap">
                                <div className="wrapper">
                                    <h3 className='bold mb-4'>Total amount of CO&sup2; saved: 321 t</h3>
                                    <div className="row" style={{height: "90%"}}>
                                        <div className="col-xs-12 col-sm-6">
                                            <h4 style={{fontWeight: 500}} className='mb-4 vh4S'>The avoided CO&#8322; emissions correspond approximately to 61.2 times the circumference of the world with a (Small car).</h4>
                                            <h4 style={{fontWeight: 500}} className="mb-2 vh4S">Distance traveled: 2,451,085 km</h4>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <img style={{width: "100%"}} src={Car} className='car-globe' alt="" />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="wrapper">
                                <p className='mb-2'>Earth's circumference 40.074 km</p>
                                <Copyright />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
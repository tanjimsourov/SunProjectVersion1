import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Home from '../../assets/img/ghor-icon.png'


export default function Fifth(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar title="This building produces solar energy" />
                    <div className="page__content">
                        <div className="box box-shadow light">
                            <div className="box__header">
                                <h2 className="title colored">Green electricity for the region</h2>
                                <h3 className="sub-title">Facq, ready for the future</h3>
                                <div className="line"></div>
                            </div>

                            <div className="wrap">
                                <div className="wrapper">
                                    <h3 >This installation currently supplies enough green electricity for 15,630 households.</h3>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6">
                                            <h4 style={{fontWeight: 500}} class="mt-4 vh4">The current solar energy production of 1,972.05 kWh is equal to the electricity consumption of 15,630 3-person households.</h4>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <img style={{width: "80%"}} src={Home} className='house-img' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p>Average energy consumption:<br></br>
                                    3-person household 4 kWh per year (100 m&sup2; living space)</p>
                            </div>

                            <Copyright />
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Home from '../../assets/img/ghor-icon.png'

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg'
import Title from '../template/Title';

export default function Fifth(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar ln="nl" placeholder={PlaceHolder}/>
                    <div className="page__content">
                        <div className="box box-shadow light">
                            <div className="box__header">
                                <h2 className="title colored">Groene elektriteit voor de regio</h2>
                                <h3 className="sub-title">
                                    
                                    <Title />
                                        
                                </h3>
                                <div className="line"></div>
                            </div>

                            <div className="wrap">
                                <div className="wrapper">
                                    <h3>Deze installatie levert op dit moment genoeg groene elektriciteit voor 15630 Huishoudens.</h3>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6">
                                            <h4 style={{fontWeight: 500}}  class="mt-4 vh4">Momenteel is het equivalent stroom voor 15630 huishoudens met betrekking tot de hernieuwbare energie die door dit zonnepark wordt geproduceerd.</h4>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <img style={{width: "80%"}} src={Home} className='house-img' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p>Gemiddeld energievverbruik:<br></br>
                            3-persoons huishouden 4 kWh per jaar(100 m&sup2; leefruimte)</p>
                            </div>

                            <Copyright ln="nl"/>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Tree from '../../assets/img/tree.png'
import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';
import Title from '../template/Title';

export default function NlFourthPage(){

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
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <h3 className='mb-3 vh3'>Totaal bespaarde hoeveelheid CO&#8322;: 321 t</h3>
                                        <p class="m-0 p-0">Er zouden 25,672 bomen moeten worden geplant om dezelfde hieveelheid CO&#8322; uit de lucht te verwijderen in de komonde 10 jaar.</p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 text-center">
                                        <img style={{width: "80%"}} src={Tree} alt="" />
                                    </div>
                                </div>

                                <p className="box-note">100m&sup2; bos, met 80 bomen, verwijdert in een jaar ongevver een ton CO2 uit de lucht</p>
                            </div>

                            <Copyright ln="nl" />
                                
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
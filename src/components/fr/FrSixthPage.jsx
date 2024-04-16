import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Car from '../../assets/img/car-worldicon.png'
import PlaceHolder from  '../../assets/img/fr/fr-floating.jpeg'

export default function FrSixthPage(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar ln="fr" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Émissions de CO&#8322; évitées</h2>
                                <h3 className="sub-title">
                                <div className='row'>
                                    <div className='col-lg-10'>Ce bâtiment produit de l'énergie solaire !</div>
                                        <div className='col-lg-2' style={{'text-align': 'end'}}>Info 2023</div>
                                        </div>
                                </h3>
                                <div className="line"></div>
                            </div> 
                            <div className="wrap">
                                <div className="wrapper">
                                    <h3 className='bold mb-4'>Quantité totale de CO&#8322; économisée : 321 t</h3>
                                    <div className="row" style={{height: "90%"}}>
                                        <div className="col-xs-12 col-sm-6">
                                            <h4 style={{fontWeight: 500}} className='mb-4 vh4S'>Les émissions de CO&#8322; évitées correspondent environ à 61,2 fois la circonférence du monde avec une (Petite voiture).</h4>
                                            <h4 style={{fontWeight: 500}} className="mb-2 vh4S">Distance parcourue : 2,451,085 km</h4>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <img style={{width: "100%"}} src={Car} className='car-globe' alt="" />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="wrapper">
                                <p className='mb-2'>Circonférence de la terre 40.074 km</p>
                                <Copyright ln="fr" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Home from '../../assets/img/ghor-icon.png'

import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg'

export default function FrFifthPage(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar ln="fr" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <div className="box box-shadow light">
                            <div className="box__header">
                                <h2 className="title colored">De l'électricité verte pour la région</h2>
                                <h3 className="sub-title">
                                <div className='row'>
                                    <div className='col-lg-10'>Facq, prêt pour l'avenir</div>
                                        <div className='col-lg-2' style={{'text-align': 'end'}}>Info 2023</div>
                                        </div>
                                </h3>
                                <div className="line"></div>
                            </div>

                            <div className="wrap">
                                <div className="wrapper">
                                    <h3 class="vh3">La production actuelle d'énergie solaire de 1 972,05 kWh équivaut à la consommation électrique de 15630 foyers de 3 personnes.</h3>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6">
                                            <h4 style={{fontWeight: 500}}  class="mt-4 vh4">Actuellement, l'équivalent de l'énergie renouvelable produite par cette ferme solaire alimente 15630 ménages.</h4>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <img style={{width: "80%"}} src={Home} className='house-img' alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p>Consommation énergétique moyenne :<br></br>
                                Ménage de 3 personnes 4 kWh par an (100 m&sup2; de surface habitable)</p>
                            </div>

                            <Copyright ln="fr" />
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
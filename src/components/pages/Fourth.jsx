import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Tree from '../../assets/img/tree.png'


export default function Fourth(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar title="This building produces solar energy" />
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Avoided CO&#8322; emissions </h2>
                                <h3 className="sub-title">This building produces solar energy!</h3>
                                <div className="line"></div>
                            </div>
                            
                            <div className="wrap">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <h3 className='mb-3 vh3'>Total amount of CO&#8322; saved: 321 t</h3>
                                        <p  class="m-0 p-0">25, trees would have to be planted to remove the same amount of CO&#8322; from the air in 10 years.</p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 text-center">
                                        <img style={{width: "80%"}} src={Tree} alt="" />
                                    </div>
                                </div>

                                <p className="box-note">100m&sup2; of forest, with 80 trees, removes approximately one ton of CO&#8322; from the air in a year</p>
                            </div>

                            <Copyright />
                                
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
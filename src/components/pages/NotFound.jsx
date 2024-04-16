import React from 'react'
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';

export default function NotFound(){
    return(
        <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar ln="nl" placeholder={PlaceHolder}/>
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                
                            </div> 
                            <div className="wrap">
                                <div className="wrapper">
                                    <h2 className="text-align-center">Page Not Found</h2>
                                </div>
                                
                            </div>

                            <div className="wrapper">
                                
                                <Copyright />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}
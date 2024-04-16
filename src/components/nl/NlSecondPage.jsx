import React, {useState, useEffect} from 'react';
import Product from '../template/Product';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import { getProduct1 } from '../../data';

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';


export default function NlSecondPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProduct1())
    }, [data])

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar ln="nl" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <div className="box light">

                            <div className="box__header">

                                <h2 className="title colored">Groene stroom voor huishoudelijk gebruik</h2>
                                <h3 className="sub-title">Facq, klaar voor de toekomst</h3>
                                <div className="line"></div>

                            </div>

                            <div className="box__content">

                                <div className="wrapper">
                                    <h2 className='box-para'><strong>Met de (107,73 kWh) vandaag opgewekte zonne-energie kunt u volgende huishoudelijke apparaten een uur gebruiken:</strong></h2>
                                    <div className="product-wrap">
                                        {data.map( item => {
                                            return(
                                                <Product price={item.price} img={item.img} />
                                            )
                                        } )}
                                    </div>                                    
                                </div>

                                <Copyright ln="nl" />
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
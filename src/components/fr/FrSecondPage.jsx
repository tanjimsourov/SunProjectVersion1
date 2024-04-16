import React, {useState, useEffect} from 'react';
import Product from '../template/Product';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import { getProduct1 } from '../../data';

import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg';

export default function FrSecondPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProduct1())
    }, [data])

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar ln='fr' placeholder={PlaceHolder} />
                    <div className="page__content">
                        <div className="box light">

                            <div className="box__header">

                                <h2 className="title colored">L'énergie verte pour un usage domestique</h2>
                                <h3 className="sub-title">Facq, prêt pour l'avenir</h3>
                                <div className="line"></div>

                            </div>

                            <div className="box__content">

                                <div className="wrapper">
                                    <h2 className='box-para'><strong>Avec l'énergie solaire (107,73 kWh) générée aujourd'hui, vous pouvez utiliser les appareils électroménagers suivants pendant une heure:</strong></h2>
                                    <div className="product-wrap">
                                        {data.map( item => {
                                            return(
                                                <Product price={item.price} img={item.img} />
                                            )
                                        } )}
                                    </div>
                                </div>

                                <Copyright ln="fr" />

                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
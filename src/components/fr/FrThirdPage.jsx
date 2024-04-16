import React, {useState, useEffect} from 'react';
import Product2 from '../template/Product2';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import { getProductFR } from '../../data';
import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg';

export default function FrThirdPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProductFR())
    }, [data])

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar ln="fr" placeholder={PlaceHolder}/>
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
                            <div className="box__content">

                                <div className="wrapper">
                                    <h3 className="vh3">FR CO<sub>2</sub> économisé dès le début de l'installation</h3>
                                    <div className="product-wrap" style={{alignItems: "flex-end"}}>
                                        {data.map( item => {
                                            return(
                                                <Product2 q={item.q} title={item.title} img={item.img} />
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
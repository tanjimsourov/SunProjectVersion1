import React, {useState, useEffect} from 'react';
import Product2 from '../template/Product2';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import { getProductNL } from '../../data';

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';

export default function NlThirdPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProductNL())
    }, [data])

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
                                <h3 className="sub-title">Dit gebouw produceert zonne-energie!</h3>
                                <div className="line"></div>
                            </div>
                            <div className="box__content">

                                <div className="wrapper">
                                    <h3 className="vh3">Vermeden en bespaarde CO<sub>2</sub> vanaf het begin van de installatie</h3>
                                    <div className="product-wrap" style={{alignItems: "flex-end"}}>
                                        {data.map( item => {
                                            return(
                                                <Product2 q={item.q} title={item.title} img={item.img} />
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
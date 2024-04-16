import React, {useState, useEffect} from 'react';
import Product2 from '../template/Product2';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import { getProduct2 } from '../../data';

export default function SecondPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProduct2())
    }, [data])

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar title="" />
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Avoided CO&#8322; emissions</h2>
                                <h3 className="sub-title">This building produces solar energy!</h3>
                                <div className="line"></div>
                            </div>
                            <div className="box__content">

                                <div className="wrapper">
                                    <h3 className="vh3">Avoided CO&#8322; emissions since 30.11.2021:<br></br>319t; this is equivalent to:</h3>
                                    <div className="product-wrap" style={{alignItems: "flex-end"}}>
                                        {data.map( item => {
                                            return(
                                                <Product2 q={item.q} title={item.title} img={item.img} />
                                            )
                                        } )}
                                    </div>
                                </div>

                                <Copyright />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
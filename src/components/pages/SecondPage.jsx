import React, {useState, useEffect} from 'react';
import Product from '../template/Product';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import { getProduct1 } from '../../data';

export default function SecondPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProduct1())
    }, [data])

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar title='This building produces solar energy' />
                    <div className="page__content">
                        <div className="box light">

                            <div className="box__header">

                                <h2 className="title colored">Green energy for household use</h2>
                                <h3 className="sub-title">Facq, ready for the future</h3>
                                <div className="line"></div>

                            </div>

                            <div className="box__content">

                                <div className="wrapper">
                                    <h2 className='box-para'><strong>With the (107.73 kWh) solar energy generated today you can use the following household appliances for an hour:</strong></h2>
                                    <div className="product-wrap">
                                        {data.map( item => {
                                            return(
                                                <Product price={item.price} img={item.img} />
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
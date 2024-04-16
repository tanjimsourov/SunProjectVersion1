import React, { useState, useEffect } from 'react';
import FaqImg from '../../assets/img/logo-left.jpg'
import Circle from '../../assets/img/circle-fourty.png'

const data = [
    {
        title: 'Alleur',
        value: 190.549
    },
    {
        title: 'Alleur',
        value: 104.171
    },
    {
        title: 'Anderlecht',
        value: 163.441
    },
    {
        title: 'Arlon',
        value: 150.271
    },
    {
        title: 'Brugge',
        value: 171.809
    },
    {
        title: 'Eupen',
        value: 163.142
    },
    {
        title: 'Gembloux',
        value: 73.501
    },
    {
        title: 'Grivegnee',
        value: 75.235
    },
    {
        title: 'Hasselt',
        value: 9.619
    },
    {
        title: 'Heverlee',
        value: 91.170
    },
    {
        title: 'Jambes',
        value: 194.170
    },
    {
        title: 'Libramont',
        value: 95.496
    },
    {
        title: 'Merelbeke',
        value: 504.255
    },
    {
        title: 'Nimy',
        value: 96.156
    },
    {
        title: 'Oostende',
        value: 142.941
    },
    {
        title: 'Ramegnies-Chin',
        value: 152.982
    },
    {
        title: 'Sint- Agatha-Berchem',
        value: 54.469
    },
    {
        title: 'Wauthier-Braine',
        value: 96.753
    },
    {
        title: 'Wavre',
        value: 87.858
    },
    {
        title: 'Zaventem 1 & 2',
        value: 54.420
    }
]



function NlFourtyPage() {

    const [listData, setListDate] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setListDate(data)
    }, [])
    
    useEffect(()=>{
        setLoading(false)
    }, [listData])

  return (
    <>
            <div className='fourty-page full-page flex flex-direction-column' style={{background: '#16A085', padding: '1rem', minHeight: '100vh'}}>

                
            <div className="row flex-1">

                <div className="col-xs-12 col-sm-6">

                    <ul className="data-lists">
                        {
                            listData.length > 0 && !loading && listData.map((list)=>(
                                <li>
                                    <div className="row">
                                        <div className="col-6">
                                            <h2 className="title">{list.title}</h2>
                                        </div>
                                        <div className="col-6">
                                            <div className="value gap-20">
                                                <h2 className="unit">(kWh)</h2>
                                                <h2 className="unit-value text-align-end">{list.value}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                    
                </div>
                <div className="col-xs-12 col-sm-6 left">

                    <div className="row align-items-center flex-1">
                        <div className="col-12 flex justify-content-center">
                            <div className="imgs flex align-items-center" style={{gap: '20px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center'}}>
                                <img src={FaqImg} alt="" />
                                <img src={Circle} alt="" />
                                <h2 className="year">2023</h2>
                            </div>
                        </div>
                        <div className="col-12 flex justify-content-center text-center">
                            <h2>kWh besparing gerealiseerd <br></br>Economies de kWh réalisées</h2>
                        </div>
                        <div className="col-12 last flex text-center justify-content-center flex-direction-column align-items-center justify-contens-center" style={{marginTop: '2em'}}>
                            <h2>3.775.065</h2>
                            <h2>kWh</h2>
                            <h2>=</h2>
                            <h2>14.510 units</h2>
                        </div>

                    </div>
                </div>
                
            </div>
                           
            </div>
        </>
  )
}

export default NlFourtyPage
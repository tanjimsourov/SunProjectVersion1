import React, { useState, useEffect } from 'react';
import FaqImg from '../../assets/img/logo-left.jpg'
import Circle from '../../assets/img/circle-fourty.png'

import FrPlaceholder from '../../assets/img/fr/fr-floating.jpeg'
import NlPlaceholder from '../../assets/img/nl/nl-floating.jpeg'
import Faq from '../../assets/img/logo-left.jpg'

const data = [
    {
        title: 'Alleur',
        value: '190.549',
        value2: '420'
    },
    {
        title: 'Alleur',
        value: '104.171',
        
    },
    {
        title: 'Anderlecht',
        value: '163.441',
        value2: '1.482'
    },
    {
        title: 'Arlon',
        value: '150.271',
        value2: '408'
    },
    {
        title: 'Brugge',
        value: '171.809',
        value2: '528'
    },
    {
        title: 'Eupen',
        value: '163.142',
        value2: '488'
    },
    {
        title: 'Gembloux',
        value: '73.501',
        value2: '241'
    },
    {
        title: 'Grivegnee',
        value: '75.235',
        value2: '264'
    },
    {
        title: 'Hasselt',
        value: '9.619',
        value2: '518'
    },
    {
        title: 'Heverlee',
        value: '91.170',
        value2: '264'
    },
    {
        title: 'Jambes',
        value: '194.170',
        value2: '618'
    },
    {
        title: 'Libramont',
        value: '95.496',
        value2: '302'
    },
    {
        title: 'Merelbeke',
        value: '504.255',
        value2: '1.932'
    },
    {
        title: 'Nimy',
        value: '96.156',
        value2: '286'
    },
    {
        title: 'Oostende',
        value: '142.941',
        value2: '466'
    },
    {
        title: 'Doornik',
        value: '152.982',
        value2: '488'
    },
    {
        title: 'Sint- Agatha-Berchem',
        value: '54.469',
        value2: '272'
    },
    {
        title: 'Wauthier-Braine',
        value: '96.753',
        value2: '320'
    },
    {
        title: 'Wavre',
        value: '87.858',
        value2: '260'
    },
    {
        title: 'Zaventem 1 & 2',
        value: '54.420',
        value2: '3.490'
    }
]

function FourtyPage() {

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

                <div className="col-xs-12 col-sm-12 col-md-6">

                    <table className="data-lists">
                        {
                            listData.length > 0 && !loading && listData.map((list)=>(
                            
                                    <tr>
                                        <td style={{marginRight: '20px'}}>
                                            <h2>{list.title}</h2>
                                        </td>
                                        <td>
                                                <h2>(kWh) <span className='pl-3 fourty-page-Value'>{list.value}</span>
                                                <span className='pl-3 fourty-page-Hash'>-</span>
                                                <span className='pl-3'>{list.value2}</span>
                                                </h2>
                                              
                                        </td>
                                    </tr>
                                
                            ))
                        }
                        
                    </table>
                    
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 left flex align-start">

                    <div className="row align-items-center">
                        <div className="col-12 flex justify-content-center">
                            <div className="imgs flex align-items-center" style={{gap: '40px', marginBottom: '20px', flexWrap: 'wrap', justifyContent: 'center'}}>
                                <img style={{ height: '170px'}} src={FrPlaceholder} alt="" />
                                <img style={{ height: '170px'}} src={Faq} alt="" />
                                <img style={{ height: '170px'}} src={NlPlaceholder} alt="" />
                            </div>
                        </div>
                        <div className="col-12 flex justify-content-center text-center">
                            <h2>kWh savings achieved <br></br>Economies de kWh réalisées</h2>
                        </div>
                        <div className="col-12 last flex text-center justify-content-center flex-direction-column align-items-center justify-contens-center">
                            <img src={Circle} alt="" />
                            <h2>3.775.065</h2>
                            <h2>kWh</h2>
                            <h2>=</h2>
                            <h2>14.510</h2>
                            <h2>zonnepanelen<br></br>panneaux solaires</h2>
                        </div>

                    </div>
                </div>
                
            </div>
                           
            </div>
        </>
  )
}

export default FourtyPage
import React, { useEffect, useState } from 'react';
import Sidebar from '../template/Sidebar';
import Copyright from '../template/Copyright';
import axios from 'axios';
import PlaceHolder from '../../assets/img/floating-img.jpg';
import WhetherBox from '../template/WetherBox';
import useQuery from '../../hooks/useQuery';

const cacheKey = 'tenth_cache_data'


export default function Tenth(){

    const URL = "https://uatapi.display-anywhere.com/api/GetWeatherForecast"
    let [data, setData] = useState([]);
    const [cachedData, setCachedData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const paramValue = useQuery('en'); 
    
    useEffect(() => {
        
        axios.post( URL, paramValue )
          .then(resp => {
            if (resp.status === 200) {
              const res = JSON.parse(resp.data.data);
    
              setData(res)
              console.log(res)
              
            }
            setLoading(false); // Move setLoading(false) outside the conditional block
          })
          .catch(error => {
            setError(error);
            setLoading(false); // Move setLoading(false) here as well
          });
    
      }, [loading]);

      useEffect(() => {
        const cachedDataString = localStorage.getItem(cacheKey);
      
        if (cachedDataString) {
            try {
                const parsedData = JSON.parse(cachedDataString);
                setCachedData(parsedData);
                
            } catch (error) {
                console.error('Error parsing cached data:', error);
            }
        }
    }, []);
  
    useEffect(() => {
        console.log(data)
        if (data && !loading && !error) {
            // Update cache
            localStorage.setItem(cacheKey, JSON.stringify(data));
        }
    }, [data, loading, error]);
  
    if (error && cachedData !== null) {
      data = cachedData
    }

    return(
        <>
            <div className="page full-screen background bg2">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar title="This building produces solar energy" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <div className="box extralight">
                            <div className="box__header">
                                <h2 className="title">Metereologic Forecasts</h2>
                                <div className="line"></div>
                            </div>
                            
                            <div className="wrap flex align-center">

                                <div className="row">
                                    
                                    {data.length !== 0 && data.map((item, id)=>{
                                        return <WhetherBox key={id} item={item} />
                                    })}
                                </div>
                            </div>

                            <Copyright />
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}
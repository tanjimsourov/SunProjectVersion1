import React, {useState, useEffect} from 'react';
import useQuery from '../../hooks/useQuery';
import Sidebar from '../template/Sidebar';
import Copyright from '../template/Copyright';
import WhetherBox from '../template/WetherBox';
import axios from 'axios';
import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg';

const cacheKey = 'fr_tenth_cache_data'

export default function FrTenthPage(){

    const URL = "https://uatapi.display-anywhere.com/api/GetWeatherForecast"
    const body = {id: 'zaventem'}
    let [data, setData] = useState([]);
    const [cachedData, setCachedData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const paramValue = useQuery('fr'); 

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
                    <Sidebar ln="fr" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <div className="box extralight">
                            <div className="box__header">
                                <h2 className="title">Prévisions météorologiques</h2>
                                <div className="line"></div>
                            </div>
                            
                            <div className="wrap flex align-center">

                                <div className="row">
                                    
                                    {data.length !== 0 && data.map((item, id)=>{
                                        return <WhetherBox key={id} item={item} />
                                    })}
                                </div>
                                
                            </div>
                            <Copyright ln="fr" />
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}
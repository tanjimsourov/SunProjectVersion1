import React, {useState, useEffect} from 'react';
import useQuery from '../../hooks/useQuery';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Chart from 'react-apexcharts'
import useApiData from '../../hooks/useChartData';
import useChart from '../../hooks/useChart';

import PlaceHolder from  '../../assets/img/fr/fr-floating.jpeg'

const URL = "https://uatapi.display-anywhere.com/api/GetEnergyMonthWiseChart"

const cacheKey = 'fr_eigth_cache_data'

export default function FrEigth(){

    const [size, setSize] = useState()
    const [height, setHeight] = useState('320')

    useEffect(()=>{
        const handleResize = ()=>{
            setSize(window.innerWidth)
        }
        
        window.addEventListener( 'resize', handleResize )

        handleResize();

        return(()=>{
            window.removeEventListener( 'resize', handleResize )
        })
    }, [])

    useEffect(()=>{
        if(size < 900){
            setHeight('200')
        }else{
            setHeight('320')
        }
    }, [size])

    const chartOptions = {
        id: 'eight-page',
        colors: ["#ffd800", "transparent"],
        width: '100%',
        enabled: false,
        name: 'Puissance de sortie (Facq Zaventem showroom)',
        title: `Année: ${new Date().getFullYear().toString()}`
    }

    const paramValue = useQuery('fr');  
    const { data, loading, error } = useApiData(URL, paramValue, cacheKey);
    const {options, series } = useChart(data, loading, chartOptions);

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar ln="fr" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Aperçu annuel</h2>
                                <h3 className="sub-title">Ce bâtiment produit de l'énergie solaire !</h3>
                                <div className="line"></div>
                            </div>
                            
                            <div className="wrap align-center">
       
                                {!loading && <Chart options={options} series={series} type="bar" width={"100%"} height={height} /> }  

                                <Copyright ln="fr" />  

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts'
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import useChartData from '../../hooks/useChartData';
import useChart from '../../hooks/useChart';
import useQuery from '../../hooks/useQuery';
import PlaceHolder from  '../../assets/img/fr/fr-floating.jpeg'

const URL = "https://uatapi.display-anywhere.com/api/GetEnergyYearWiseChart"

const cacheKey = 'fr_ninth_cache_data'

export default function FrNinth(){

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
        id: 'ninth-page',
        colors: ["#ffd800", "transparent"],
        width: '100%',
        enabled: false,
        name: "Ce bâtiment produit de l'énergie solaire !",
        title: `Année: ${new Date().getFullYear().toString()}`
    }
  
    const paramValue = useQuery('fr');    
    const { data, loading, error } = useChartData(URL, paramValue, cacheKey);
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
                                <h2 className="title colored">Émissions de CO<sub>2</sub> évitées : 280,21 t</h2>
                                <h3 className="sub-title">La Facq mise sur les énergies renouvelables</h3>
                                <div className="line"></div>
                            </div>
                            <div className="wrap flex align-center">

                                { !loading && <Chart options={options} series={series} type="bar" width={"100%"} height={height} /> }
                                <Copyright ln="fr" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
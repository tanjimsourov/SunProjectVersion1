import React, {useEffect, useState} from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Chart from 'react-apexcharts'
import useChartData from '../../hooks/useChartData';
import useChart from '../../hooks/useChart';
import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg'
import useQuery from '../../hooks/useQuery';
import Title from '../template/Title';

const URL = "https://uatapi.display-anywhere.com/api/GetEnergyMonthWiseChart"

export default function NlEigth(){

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
        name: 'Uitgangsvermogen (Facq Zaventem showroom)',
        title: `Jaar: ${new Date().getFullYear().toString()}`
    }

    const paramValue = useQuery('nl');
    const { data, loading, error } = useChartData(URL, paramValue);
    const {options, series } = useChart(data, loading, chartOptions);

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar ln="nl" placeholder={PlaceHolder}/>
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Jaaroverzicht</h2>
                                <h3 className="sub-title">
                                    Dit gebouw produceert zonne-energie!
                                </h3>
                                <div className="line"></div>
                            </div>
                            
                            <div className="wrap align-center">
                                {!loading && <Chart options={options} series={series} type="bar" width={"100%"} height={height} /> }  
                                {error && <h1>{error.message}</h1>}

                                <Copyright ln="nl" />  

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
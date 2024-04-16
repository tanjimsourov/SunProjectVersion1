import React, {useState, useEffect} from 'react';
import Chart from 'react-apexcharts'
import useQuery from '../../hooks/useQuery';
import Sidebar from '../template/Sidebar';
import Copyright from '../template/Copyright';
import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg'
import useChartData from '../../hooks/useChartData';
import useChart from '../../hooks/useChart';
import Title from '../template/Title';

const URL = "https://uatapi.display-anywhere.com/api/GetEnergyYearWiseChart"

const cacheKey = 'nl_ninth_cache_data'

export default function NlNinthPage(){

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
        name: 'Dit gebouw produceert zonne-energie!',
        title: `Jaar: ${new Date().getFullYear().toString()}`
    }

    const paramValue = useQuery('nl');
    const { data, loading, error } = useChartData(URL, paramValue, cacheKey);
    const { options, series } = useChart(data, loading, chartOptions);

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar ln="fr" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Vermeden Co<sub>2</sub> uitstoot: 280,21 t</h2>
                                <h3 className="sub-title">
                                    De Facq richt zich op hernieuwbare energieën
                                </h3>
                                <div className="line"></div>
                            </div>
                            <div className="wrap flex align-center">

                                
                                { !loading && <Chart options={options} series={series} type="bar" width={"100%"} height={height} /> }
                                <Copyright ln="nl" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

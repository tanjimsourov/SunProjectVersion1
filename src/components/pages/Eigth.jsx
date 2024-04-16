import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Chart from 'react-apexcharts'
import useChartData from '../../hooks/useChartData';
import useChart from '../../hooks/useChart';
import useQuery from '../../hooks/useQuery';

const URL = "https://uatapi.display-anywhere.com/api/GetEnergyMonthWiseChart"

const cacheKey = 'eigth_cache_data'

export default function Eigth(){

        const chartOptions = {
            id: 'eight-page',
            colors: ["#ffd800", "transparent"],
            width: '100%',
            enabled: false,
            name: 'Power output (Facq Zaventem showroom)',
            title: `Year: ${new Date().getFullYear().toString()}`
        }

        const paramValue = useQuery("en");
        const { data, loading, error } = useChartData(URL, paramValue, cacheKey);
        const {options, series } = useChart(data, loading, chartOptions);

        return(
            <>
                <div className="page full-screen background">
                    <div className="shadow"></div>
                    <div className="grid">
                        <Sidebar title=""/>
                        <div className="page__content">
                            <div className="box light">
                                <div className="box__header">
                                    <h2 className="title colored">Anual Report</h2>
                                    <h3 className="sub-title">This building produces solar energy!</h3>
                                    <div className="line"></div>
                                </div>
                                
                                <div className="wrap align-center">
                                    {!loading && <Chart options={options} series={series} type="bar" width={"100%"} height={'320'} /> }  

                                    <Copyright />  

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

}
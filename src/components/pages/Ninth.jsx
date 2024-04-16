import React from 'react';
import useQuery from '../../hooks/useQuery';
import Chart from 'react-apexcharts';
import Sidebar from '../template/Sidebar';
import Copyright from '../template/Copyright';
import useChartData from '../../hooks/useChartData';
import useChart from '../../hooks/useChart';

const URL = 'https://uatapi.display-anywhere.com/api/GetEnergyYearWiseChart';

const cacheKey = 'ninth_cache_data'

export default function Ninth() {
  const chartOptions = {
    id: 'ninth-page',
    colors: ['#ffd800', 'transparent'],
    width: '100%',
    enabled: false,
    name: 'This building produces solar energy!',
    title: `Year: ${new Date().getFullYear().toString()}`
  };

  let dataTemp = [
    {
      year: 2021,
      value: 0.11455,
    },
    {
      year: 2022,
      value: 1.11435,
    },
    {
      year: 2023,
      value: 1.4455,
    },
    {
      year: 2024,
      value: 2.1144,
    },
  ];

  const paramValue = useQuery('en');
  const { data, loading, error } = useChartData(URL, paramValue, cacheKey);
  const { options, series } = useChart(data, loading, chartOptions);

  return (
    <>
      <div className="page full-screen background">
        <div className="shadow"></div>
        <div className="grid">
          <Sidebar title="This building produces solar energy" />
          <div className="page__content">
            <div className="box light">
              <div className="box__header">
                <h2 className="title colored">Avoided CO<sub>2</sub> emissions: 280.21 t</h2>
                <h3 className="sub-title">Facq goes for renewable energy</h3>
                <div className="line"></div>
              </div>
              <div className="wrap flex align-center">
                {!loading && <Chart options={options} series={series} type="bar" width={'100%'} height={'320'} />}
                <Copyright />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

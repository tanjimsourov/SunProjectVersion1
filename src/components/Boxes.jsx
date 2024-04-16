import React, { useEffect, useState } from 'react';
import useApiData from '../hooks/useApiData';
import setCookie from '../hooks/setCookie';
import getCookies from '../hooks/getCookies';
import Box from '../components/Box';
import { getFrData, getNlData, getData } from '../data';
import useQuery from '../hooks/useQuery';

const URL = "https://uatapi.display-anywhere.com/api/GetEnergySummary";

export default function Boxes(props) {

  const paramValue = useQuery(props.ln);
  const [title, setTitle] = useState(getData())
  const { data, loading, error } = useApiData(URL, paramValue);
  const [cookieData, setCookieData] = useState([]);

  useEffect(() => {

    setCookieData(getCookies());
    if(props.ln === 'nl'){
      setTitle(getNlData())
    }else if(props.ln === 'fr'){
      setTitle(getFrData())
    }

  }, [props.ln]);

  useEffect(() => {
    if (cookieData.length === 0 && !loading) {

        let result = data;
  
        result.map((item) => {
          return setCookie(item.title, item.speed);
        });
  
        setCookieData(result); // Update cookieData after setting the cookies
    }
  }, [ data, loading]);

  return (
    <>
      <div className="grid-3" id="boxes">
        {!loading && data.length === 0 && cookieData.map((item, idx) => {
          return <Box key={idx} title={title[idx].title} speed={item.speed} />;
        })}
        {!loading && data.length >= 0 && data.map((item, idx) => {
          return <Box key={idx} title={title[idx].title} speed={item.speed} />;
        })}
      </div>
    </>
  );
}

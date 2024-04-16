import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const useChartData = (URL, params, cacheKey) => {
  let [data, setData] = useState([]);
  const [cachedData, setCachedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const payload = useMemo(() => {
    return { id: params.id, lang: params.ln };
  }, [params.id, params.ln]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(URL, payload);
        
        if (response.status === 200) {
          const parsedData = JSON.parse(response.data.data);
          
          setData(parsedData);
        } else {
          setError(new Error(`Request failed with status ${response.status}`));
        }
      } catch (error) {
        setError(error); // Handle network errors here
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL, payload]);

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
  

  return { data, loading, error };
};

export default useChartData;

import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const useApiData = (URL, body) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const param = useMemo(() => {
    return { id: body.id, lang: body.ln };
  }, [body.id, body.ln]);

  useEffect(() => {
    axios.post(URL, param)
      .then(resp => {
        if (resp.status === 200) {
          const res = JSON.parse(resp.data.data);

          res.forEach(item => {
            item['daily']=Number(parseFloat(item['daily'])).toLocaleString("de-DE", {minimumFractionDigits: 2})
            item['monthy']=Number(parseFloat(item['monthy'])).toLocaleString("de-DE", {minimumFractionDigits: 2})
            item['yearly']=Number(parseFloat(item['yearly'])).toLocaleString("de-DE", {minimumFractionDigits: 2})
          });

          const formattedData = Object.entries(res[0]).map(([title, speed]) => ({
            title: title.charAt(0).toUpperCase() + title.slice(1),
            speed: `${speed} ${'kWh'}`
          }));
          setData(formattedData);
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [URL, param]);

  return { data, loading, error };
};

export default useApiData;

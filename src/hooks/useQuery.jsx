import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

export default function useQuery(ln) {
  const [paramValue, setParamValue] = useState();
  const [searchParam, setSearchParam] = useSearchParams();
  const id = searchParam.get("id");

  useEffect(() => {
    setParamValue(id);
    console.log({ id: id, lang: ln })
  }, [id, ln]); 

  return { id: paramValue, lang: ln };
}

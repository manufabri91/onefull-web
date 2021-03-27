import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url, dependencies = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const result = await axios(process.env.REACT_APP_API_BASE_URL + url);
        setData(result.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    makeRequest();
    // eslint-disable-next-line
  }, dependencies);
  return { data, loading, error };
};

export default useFetch;

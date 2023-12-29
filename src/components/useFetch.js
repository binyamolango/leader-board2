import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = (url) => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error("Error! Couldn't fetch the data");
        } else {
          return res.json();
        }
      })
      .then(data => {
        setData(data);
        setIsPending(false);
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  }
  
  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, isPending, error, setError, setIsPending, fetchData };
}
 
export default useFetch;
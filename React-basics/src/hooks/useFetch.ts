import { useState, useEffect } from 'react';

interface modifiedError extends Error{
    status?: string;
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<modifiedError | null>(null)
  const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url, {mode: 'no-cors'});
                
                if (!res.ok) {
                    let err: modifiedError = new Error("An error occurred while fetching the data.");
                    err.status = res.status.toString() || "00";
                    err.message = res.statusText || "Ocurrio un error";
                    throw err;
                }

                const json = await res.json();

                if(!signal.aborted){
                    setData(json);
                    setError(null);
                }
            } catch (error) {
                if(error instanceof Error && !signal.aborted){	
                    setData(null);
                    setError(error);
                }
            } finally {
                if(!signal.aborted) setLoading(false);
            }
        }

        fetchData();
    }, [url]);

  return { data, error, loading };
}

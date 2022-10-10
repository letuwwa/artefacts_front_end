import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        const abortCount = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCount.signal })
                .then(res => {
                    if(!res.ok) {
                        throw Error("Could not fetch data for that resource");
                    }
                    return res.json();
                })
                .then(data => {
                    setFetchedData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsLoading(false);
                        setError(err.message);
                    }
                });
        }, 1000);

        return () => abortCount.abort();
    }, [url]);

    return { fetchedData, isLoading, error}
}

export default useFetch

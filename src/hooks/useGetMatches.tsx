import { useEffect, useState } from "react";
import axios from 'axios';
import { API_URL, API_TOKEN } from '@env';

function useGetMatches() {
    const [data,setData] = useState();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
        .get(API_URL + `/ScoresBasic/{2023-03-22}?key=${API_TOKEN}`)
        .then (response => {
            setData(response.data);
        })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);
    return {data,loading,error};
}

export default useGetMatches;
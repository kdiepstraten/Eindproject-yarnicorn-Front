import {useEffect, useState} from "react";
import axios from "axios";



const useFetch = ({ url, method, postData, config, state}) => {

    const [dataFetch, setData] = useState(state);
    const [loadingFetch, setLoadingFetch] = useState(true);
    const [errorFetch, setErrorFetch] = useState(false);


    useEffect(() => {
        void fetch();
    }, []);

    async function fetch() {
        setLoadingFetch(true);
        try {
            let response;
            if (method === "get") {
                response = await axios.get(url, config);
            } else if (method === "post") {
                response = await axios.post(url, postData, config);
            } else if (method === "delete") {
                response = await axios.delete(url, config);
            }
            setData(response.data);
        } catch (error) {
            setErrorFetch(error);
            console.error(error);
            console.error("Error status:", error.response.status);
            console.error("Error data:", error.response.data);
        } finally {
            setLoadingFetch(false);

        }

    }
    return {dataFetch, loadingFetch, errorFetch};
}
export default useFetch;
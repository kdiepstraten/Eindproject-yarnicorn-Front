import {createContext, useState} from 'react';

export const LoadingContext = createContext({});


const LoadingProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [loadingComponent, setLoadingComponent] = useState(null);

    function startLoading(loadingComponent = null) {
        setLoading(true);
        setLoadingComponent(loadingComponent);
    }

    function stopLoading() {
        setLoading(false);
        setLoadingComponent(null);
    }

    const data = {
        loading,
        startLoading: startLoading,
        stopLoading: stopLoading,
        loadingComponent,
    };

    return (
        <LoadingContext.Provider value={data}>
            {children}
        </LoadingContext.Provider>
    );
}
export default LoadingProvider;




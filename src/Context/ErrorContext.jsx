import {createContext, useState} from 'react';

export const ErrorContext = createContext({});

const ErrorProvider = ({children}) => {

    const [error, setError] = useState(null);

    function handleError() {
        setError(true);
    }

    const clearError = () => {
        setError(null);
    }
    const data = {
        error,
        handleError: handleError,
        clearError: clearError,
    };
    return (
        <ErrorContext.Provider value={data}>
            {children}
        </ErrorContext.Provider>
    );
}
export default ErrorProvider;
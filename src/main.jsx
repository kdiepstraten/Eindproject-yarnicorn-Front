import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from "./Context/AuthContext.jsx";
import LoadingProvider from "./Context/LoadingContext.jsx";
import ErrorProvider from "./Context/ErrorContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <Router>
        <ErrorProvider>
            <LoadingProvider>
                <AuthContextProvider>

                    <App/>

                </AuthContextProvider>
            </LoadingProvider>
        </ErrorProvider>
    </Router>
// </React.StrictMode>
)

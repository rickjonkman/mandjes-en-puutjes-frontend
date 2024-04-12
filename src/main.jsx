import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LanguageContextProvider from "./context/LanguageContext.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LanguageContextProvider>
            <Router>
                <AuthContextProvider>
                    <App/>
                </AuthContextProvider>
            </Router>
        </LanguageContextProvider>
    </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LanguageContextProvider from "./context/LanguageContext.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import UserContextProvider from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <UserContextProvider>
                <LanguageContextProvider>


                    <App/>


                </LanguageContextProvider>
            </UserContextProvider>
        </Router>
    </React.StrictMode>,
)

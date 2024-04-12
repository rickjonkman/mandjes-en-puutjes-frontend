
import './App.scss'
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/login-register-pages/open/LandingPage.jsx";
import LoginPage from "./pages/login-register-pages/open/LoginPage.jsx";
import RegisterPage from "./pages/login-register-pages/open/RegisterPage.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App

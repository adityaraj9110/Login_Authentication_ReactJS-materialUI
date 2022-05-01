import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/pages/auth/LoginReg";
import SendPas from "./components/pages/auth/SendPas";
import ResetPas from "./components/pages/auth/ResetPas";
import  Dashboard  from './components/pages/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="login" element={<LoginReg/>} />
        <Route path="sendpas" element={<SendPas/>} />
        <Route path="resetpas" element={<ResetPas/>} />
      </Route>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<h1>Error 404 page not found</h1>} />

    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;

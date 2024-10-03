// import ProductForm from "./components/forms/ProductForm"
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/CSS/Add.css'
import './components/CSS/Table.css'
import './components/CSS/Header.css'
import './App.css'
import Header from "./components/header/Header";
import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Add from "./components/pages/Add";
import Update from './components/pages/Update';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
// import Modal from './components/Modal';

function App() {

  return (
    <>
      {/* <Header /> */}
      {/* <Modal /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addProduct" element={<Add />} />
        <Route path="/updateProduct/:id" element={<Update />} />
      </Routes>
    </>
  )
}

export default App
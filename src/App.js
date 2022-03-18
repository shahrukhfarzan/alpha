import { BrowserRouter, Route, Routes, } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import './App.css';

 
import Login from "./Components/Login/Login";
import Inventory from "./Components/admin/ManageInventory/Inventory";
import SalesExcutive from "./Components/admin/ManageInventory/SalesExcutive";
import CreateOrder from "./Components/admin/ManageInventory/CreateOrder";
import Orders from "./Components/admin/ManageInventory/Orders";

const App = () =>{
    return (
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/inventory" element={<Inventory />}></Route>
                <Route path="/createorder" element={<CreateOrder />}></Route>
                <Route path="/salesExcutive" element={<SalesExcutive />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
            </Routes>
            </BrowserRouter>
            
        </>
    );
}

export default App;
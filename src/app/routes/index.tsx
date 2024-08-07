import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../screens/client/home";
import Error404 from "../screens/client/404";
import { Login } from "../screens/client/login";
import { Register } from "../screens/client/register";



export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error404 />} />
                <Route path={"/"} element={<Home/>} />
                <Route path={"/login"} element={<Login/>} />
                <Route path={"/register"} element={<Register/>} />
            </Routes>
        </BrowserRouter>
    );
}
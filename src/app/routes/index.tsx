import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../screens/client/portifolio";
import Error404 from "../screens/client/404";
import { Login } from "../screens/client/login";
import { Register } from "../screens/client/register";
import { PortalInterno } from "../screens/portalInterno/home";
import { Projects } from "../screens/portalInterno/projects";



export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error404 />} />
                <Route path={"/"} element={<Home/>} />
                <Route path={"/login"} element={<Login/>} />
                <Route path={"/register"} element={<Register/>} />
                <Route path={"/portalInterno/home"} element={<PortalInterno/>} />
                <Route path={"/portalInterno/projects"} element={<Projects/>} />
                
            </Routes>
        </BrowserRouter>
    );
}
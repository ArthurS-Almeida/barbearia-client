import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import Login from "../pages/login";

export default function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    );
}
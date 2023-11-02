import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export function RouterHome(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}
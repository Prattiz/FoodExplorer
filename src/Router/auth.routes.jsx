import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { SignIn } from "../pages/Login/signIn";

export function RouterSign(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
        </Routes>
    )
}
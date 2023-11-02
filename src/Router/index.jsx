import { BrowserRouter } from "react-router-dom";
import { RouterHome } from "./app.routes";
import { RouterSign } from "./auth.routes";

export function Router(){

    const user = false

    return(
        <BrowserRouter>
           {user? <RouterHome/> : <RouterSign/>}
        </BrowserRouter>
    )
}
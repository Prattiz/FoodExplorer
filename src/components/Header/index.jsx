import { Container, Logout } from "./style";
import logoI from '../../assets/Polygon 1.svg';
import { Input } from "../Input/index";
import { FiSearch } from "react-icons/fi";
import { PiSignOutBold } from "react-icons/pi"

export function Header(){

    return(
        <Container>

            <h1>
                <img src={logoI} alt="" />
                food explorer
            </h1>

            <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch}/>
            
             <Logout>
             <PiSignOutBold />
             </Logout>
            
        </Container>
    )
}
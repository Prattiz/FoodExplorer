import { Container, Logout } from "./style";
import LogoI from '../../assets/Polygon 1.svg';
import { Input } from "../Input/index";
import { FiSearch } from "react-icons/fi";
import { PiSignOutBold } from "react-icons/pi";
import { Button } from "../Buttons";
import { FaReceipt } from "react-icons/fa"

export function Header(){

    return(
        <Container>

            <h1>
                <img src={LogoI}/>
                food explorer
            </h1>

            <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch}/>

            <Button
            title="Pedidos"
            Icon={FaReceipt}
            />

             <Logout>
             <PiSignOutBold />
             </Logout>
             
            
        </Container>
    )
}
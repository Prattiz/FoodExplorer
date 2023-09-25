import { Container } from "./style";
import logoI from '../../assets/Polygon 1.svg';

export function Header(){

    return(
        <Container>
            <div>
                <h1><img src={logoI} alt="" />food explorer</h1>
            </div>

            
        </Container>
    )
}
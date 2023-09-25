import { Container } from "./style";
import logoI_100 from "../../assets/Polygon 2.svg";

export function Footer(){

    return(
        <Container>
            <div>
                <img src={logoI_100} alt="food explorer" />
                <span>food explorer</span>
            </div>
            <p>© 2023 - Todos os direitos reservados</p>
        </Container>
    )
}
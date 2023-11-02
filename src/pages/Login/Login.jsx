import { Container } from "./styles";
import LogoI from '../../assets/Polygon 1.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Buttons";
import { Link } from "react-router-dom";

export function Login(){

    return(
        <Container>
            <h1>
                <img src={LogoI}/>
                food explorer
            </h1>

            <form>
                <h1>Faça login</h1>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <Input placeholder="Exemplo: exemplo@exemplo.com.br" id="email"/>
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <Input id="password" placeholder="No mínimo 6 caracteres"/>
                </div>

                <Button type="submit" title="Entrar"/>

                <Link to="/signin">Criar Conta</Link>
            </form>
        </Container>
    )
}
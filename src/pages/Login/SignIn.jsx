import { Container } from "./styles.js";
import LogoI from '../../assets/Polygon 1.svg';
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons/index.jsx";


export function SignIn(){
    return(
        <Container>
            <h1>
                <img src={LogoI}/>
                food explorer
            </h1>

            <form>
                <h1>Crie sua conta</h1>

                <div>
                    <label htmlFor="name">seu nome</label>
                    <Input id="name" placeholder="Exemplo: Maria da Silva"/>
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <Input placeholder="Exemplo: exemplo@exemplo.com.br" id="email"/>
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <Input id="password" placeholder="No mínimo 6 caracteres"/>
                </div>

                <Button type="submit" title="Entrar"/>

                <Link to="/">Fazer Login</Link>
            </form>
        </Container>
    )
}
import { Container } from "./style";


export function Button({title, Icon, loading, ...rest}){
    return(
    <Container 
        type="button" 
        disabled={loading}
        {...rest}
    >
            {Icon && <Icon size={21} />}
            
            {loading? "Carregando..." : title}
        </Container>
    )
    
}
import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       
    }

    :root {
        font-size: 62.5%;
    }

    body{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        
        *::-webkit-scrollbar {
            width: 2rem;
            height: 2rem;
            border-radius: 100rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
    
    a{
        text-decoration: none;
        cursor: pointer;
        transition: filter .2s;
    }

    button{
        border: none;
        cursor: pointer;
        transition: filter .2s;
        font-family: 'Poppins', sans-serif;
    }

    :root {
        font-size: 62.5%;
    }

    button:hover, a:hover {
        filter: brightness(.6);
    }
`
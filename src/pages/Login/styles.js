import styled from "styled-components";

export const Container = styled.main`

    display: flex;
    
    max-width: 120.6rem;
    height: 80vh;
    margin: 5rem auto;
    padding: 9rem 4rem;
    
    justify-content: space-between;
    align-items: center;

    h1{
        font-size: 4.2rem;
        display: flex;
        gap: 20px;
    }

    form{
      
        display: flex;
        
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 3.2rem; 
        width: 50rem;
        background-color: ${({ theme }) => theme.COLORS.BLUE_200}; 
        padding: 5.0rem 6.4rem;

        div{
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: flex-start;
            gap:8px;

            label{
               color: ${({ theme }) => theme.COLORS.GRAY_100};
            }
            
            input{
                margin-right: 4.25em;
            }
        }

        button{
            padding: 1.2rem 3.2rem;
            width: 100%;
            margin: 0 auto;
        }
    }
`
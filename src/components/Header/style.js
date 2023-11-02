import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    padding: 2.4rem 10.3rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    font-size: 2rem;


    >h1{
        display: flex;
        align-items: center;
        gap:10px;
        font-size: 2.4rem;
        white-space: nowrap;
    }

    input{
        width: 100%;
        background: none;
        border: none;
    }

    .cellView{
        display: none;

    }

    @media screen and (max-width: 940px){

        
    }
`

export const Logout =  styled.button`

    border:none;
    background: none;

    >svg{
        color:${({theme}) => theme.COLORS.GRAY_100};
        font-size: 30px;
    }
    
`
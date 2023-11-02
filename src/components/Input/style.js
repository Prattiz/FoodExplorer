import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    color:${({theme}) => theme.COLORS.GRAY_300};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    padding: 1.4rem 1.4rem;
    display: flex;   
    border-radius: 10px;
    

    input{
        background: none;
        border: 0;
        width: 100%;
    }

    >svg{
        margin-right: 15px;
    }

    :focus{
        color: ${({theme}) => theme.COLORS.WHITE};
        outline: none;
    }
`
import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    margin: 0 3.2rem;
    border-radius: 10px;
    color:${({theme}) => theme.COLORS.GRAY_300};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    >svg{
        margin-right: 15px;
    }

    :focus{
        color: ${({theme}) => theme.COLORS.WHITE};
        outline: none;
    }
`
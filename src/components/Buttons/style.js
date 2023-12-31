import styled from "styled-components";


export const Container = styled.button`

    background-color: ${({theme}) => theme.COLORS.RED};
    border: none;
    border-radius: 8px;
    padding: 1.2rem 3.2rem;
    margin-right: 3.2rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    justify-content: center;
    gap:8px;
`
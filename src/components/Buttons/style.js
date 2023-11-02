import styled from "styled-components";


export const Container = styled.button`

    background-color: ${({theme}) => theme.COLORS.RED};
    width: 50%;
    border: none;
    padding: 1.2rem 3.2rem;
    margin-right: 3.2rem;
    color: ${({theme}) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    justify-content: center;
    gap:8px;
`
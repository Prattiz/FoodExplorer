import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:8px;
    padding: 2.4rem 10.3rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    font-size: 2rem;
    

    >div{
        display: flex;
        align-items: center;
        gap:8px;
    }

    p, span{
        color: ${({theme}) => theme.COLORS.GRAY_300};  
    }

    p{
        font-size: 1.6rem;
        white-space: nowrap;
    }

    @media screen and (max-width: 650px) {
     padding: 1.6rem 2.4rem;
    
     p, span{
        font-size: 1rem;
     }
  }
`
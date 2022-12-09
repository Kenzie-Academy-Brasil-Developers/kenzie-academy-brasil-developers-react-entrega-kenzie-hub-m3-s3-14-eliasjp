import styled from "styled-components";

export const HomeContainer = styled.div`
    min-height: 100%;
    background-color: var(--color-grey-4);
`

export const UserIntruduction = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    border-top: 1px solid var(--color-grey-3);
    border-bottom: 1px solid var(--color-grey-3);
    
    @media (min-width: 1024px){
        section {
            width: 700px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
        }
    }
`

export const HomeMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;

    @media (min-width: 1024px){
        display: flex;
        width: 700px;
        margin: 0 auto;
    }
`
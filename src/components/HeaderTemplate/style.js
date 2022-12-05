import styled from "styled-components"

export const StyledHeader = styled.header`
    padding: 12px;
    background: var(--color-grey-4);

    h1 {
        color: var(--color-primary);
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: ${props => props.checkChildren ? "space-between" : "center"}

    }

    a {
        display: flex;
        align-items: center;
        height: 32px;
        
        text-decoration: none;
        color: var(--color-grey-0);
        
        border: 1px solid var(--color-grey-3);
        border-radius: 4px;
        background: var(--color-grey-3);
        
        padding: 0 22px;
    }

    @media (min-width: 1024px){
        div {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
        }
    }
    `
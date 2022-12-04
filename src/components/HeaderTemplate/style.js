import styled from "styled-components"

export const StyledHeader = styled.header`
    background: green;
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

    @media (min-width: 1024px){
        div {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
        }
    }
    `
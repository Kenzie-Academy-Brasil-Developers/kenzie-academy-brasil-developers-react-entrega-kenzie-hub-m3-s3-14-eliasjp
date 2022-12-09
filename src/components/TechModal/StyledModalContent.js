import styled from "styled-components";

export const StyledModalContent = styled.div`
    width: 295px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-3);

    @media (min-width: 1024px){
        width: 396px;
    }

    div {
        display: flex;
        justify-content: space-between;
        padding: 12px 20px;
        gap: 10px;
        background-color: var(--color-grey-2);
    }

    div > button {
        background: transparent;
        border: transparent;
        font-size: 20px;
        color: var(--color-grey-1);
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;
        padding: 12px 20px;
        gap: 16px;
    }

    section {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    section > button {
        color: var(--color-grey-0);
        width: 30%;
    }

    section > button:first-child {
        width: 70%;
    }
`
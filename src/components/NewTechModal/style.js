import styled from "styled-components";

export const NewTechModalContent = styled.div`
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
`

export const NewTechForm = styled.form`
    input {
        height: 48px;
        padding: 0 13px;
        background: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
        border-radius: 4px;
        color: var(--color-grey-0);
    }

    input::placeholder {
        color: var(--color-grey-1);
    }

    button {
        color: var(--color-grey-0);
    }
`
import styled from "styled-components";

export const RegisterContainer = styled.div`
    height: 100%;
    background-color: var(--color-grey-4);
`

export const RegisterMain = styled.main`
    background-color: var(--color-grey-3);
    border: 1px solid var(--color-grey-3);
    border-radius: 4px;
    padding: 42px 23px;

    @media (min-width: 1024px){
        width: 700px;
        margin: 0 auto;
    }
`

export const RegisterForm = styled.form`
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 22px;
        gap: 18px;
    }

    button {
        width: 100%;
        margin-top: 36px;
    }
`
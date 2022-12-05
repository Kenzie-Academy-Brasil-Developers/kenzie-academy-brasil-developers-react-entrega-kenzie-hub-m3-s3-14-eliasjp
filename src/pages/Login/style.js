import styled from "styled-components"

export const LoginContainer = styled.div`
    height: 100%;
    background-color: var(--color-grey-4);
`

export const LoginMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    border: 1px solid var(--color-grey-3);
    border-radius: 4px;
    background-color: var(--color-grey-3);

    padding: 42px 23px;

    p {
        align-self: center;
    }

    a {
        width: 100%;
        height: 48px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: var(--color-grey-0);

        border: 1px solid var(--color-grey-1);
        border-radius: 4px;
        background-color: var(--color-grey-1);
    }

    @media (min-width: 1024px){
        width: 700px;
        margin: 0 auto;
    }
`

export const LoginForm = styled.form`
    h2 {
        margin-bottom: 20px;
    }

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
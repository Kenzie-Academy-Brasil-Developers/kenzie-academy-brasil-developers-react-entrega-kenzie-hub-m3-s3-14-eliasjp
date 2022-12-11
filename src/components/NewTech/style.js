import styled from "styled-components";

export const NewTechContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 18px;

    button {
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;

        font-size: 18px;
        color: var(--color-grey-0);
        font-weight: 700;

        background-color: var(--color-grey-3);
        border: 1px solid var(--color-grey-3);
        border-radius: 4px;

        cursor: pointer;
    }
`
import styled from "styled-components"

export const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 17px;

    border: none;

    input {
        height: 48px;
        background: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
        border-radius: 4px;
        color: var(--color-grey-0);
        padding: 0 16px;
    }

    input::placeholder {
        color: var(--color-grey-1);
    }

    input:focus {
        outline: none;
        border-color: var(--color-grey-0);
    }
`
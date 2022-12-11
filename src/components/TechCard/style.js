import styled from "styled-components";

export const StyledLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--color-grey-4);
    border: 1px solid var(--color-grey-4);
    border-radius: 4px;
    padding: 12px;
    cursor: pointer;
    transition: 150ms;

    &:hover{
        border: 1px solid var(--color-grey-2);
        background: var(--color-grey-2);
    }
`
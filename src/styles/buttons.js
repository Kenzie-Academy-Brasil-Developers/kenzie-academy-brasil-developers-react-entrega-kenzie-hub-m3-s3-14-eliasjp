import styled from "styled-components";

function typeSubmit (props){
    if (!props.disabled){
        return (`
            background: var(--color-primary);
            border: 1px solid var(--color-primary);
            cursor: pointer;
        `)
    }else {
        return (`
            background: var(--color-primary-negative);
            border: 1px solid var(--color-primary-negative);
            cursor: not-allowed;
        `)
    }
}

function typeButton (props){
    if (props.color === "dark-grey"){
        return (`
            background: var(--color-grey-3);
            border: 1px solid var(--color-grey-3);
            color: var(--color-grey-0);
            cursor: pointer;
        `)
    }else {
        return (`
            background: var(--color-grey-1);
            border: 1px solid var(--color-grey-1);
            cursor: pointer;
        `)
    }
}

export const StyledButton = styled.button`
    height: ${props => props.height === "default" ? "48px" : "32px"};
    padding: 0 22px;
    border-radius: 4px;
    
    ${props => props.type === "submit" ? typeSubmit (props) : typeButton (props)}
`
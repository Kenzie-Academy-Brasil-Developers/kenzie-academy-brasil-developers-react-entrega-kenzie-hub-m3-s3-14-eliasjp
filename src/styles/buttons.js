import styled from "styled-components";

function typeSubmit (props){
    if (!props.disabled){
        return (`
            background: var(--color-primary);
            cursor: pointer;
        `)
    }else {
        return (`
            background: var(--color-primary-negative);
            cursor: not-allowed;
        `)
    }
}

function typeButton (props){
    if (props.color === "dark-grey"){
        return (`
            background: var(--color-grey-3);
            cursor: pointer;
        `)
    }else {
        return (`
            background: var(--color-grey-1);
            cursor: pointer;
        `)
    }
}

export const Button = styled.button`
    height: ${props => props.height === "default" ? "48px" : "32px"};
    padding: 0 22px;
    
    ${props => props.type === "submit" ? typeSubmit (props) : typeButton (props)}
`
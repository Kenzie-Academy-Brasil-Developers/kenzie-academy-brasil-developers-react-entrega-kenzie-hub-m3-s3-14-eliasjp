import { StyledSelect } from "./style.js"

export function SelectForm({ labelName, children, toForm }){

    return (
        <>
            <label>{ labelName }</label>
            <StyledSelect { ...toForm }>
                {children}
            </StyledSelect>
        </>
    )
}
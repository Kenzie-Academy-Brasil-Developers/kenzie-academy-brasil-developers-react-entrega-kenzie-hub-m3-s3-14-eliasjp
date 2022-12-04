import { useState, useEffect } from "react"

import { StyledHeader } from "./style";


export function HeaderTemplate({ children }){
    const [ childrenExist, setChildrenExist ] = useState(false)

    useEffect(() => {
        children ? setChildrenExist(true) : setChildrenExist(false)
    }, [])
        

    return (
        <StyledHeader checkChildren={ childrenExist }>
            <div>
                <h1>Kenzie Hub</h1>
                { children }
            </div>
        </StyledHeader>
    )
}
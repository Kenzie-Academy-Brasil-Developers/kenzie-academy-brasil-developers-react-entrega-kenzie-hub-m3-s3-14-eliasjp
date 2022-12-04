import { ContainerBlock } from "./ContainerBlock";


export function Container ({ children }){
    return (
        <ContainerBlock>
            { children }
        </ContainerBlock>
    )
}
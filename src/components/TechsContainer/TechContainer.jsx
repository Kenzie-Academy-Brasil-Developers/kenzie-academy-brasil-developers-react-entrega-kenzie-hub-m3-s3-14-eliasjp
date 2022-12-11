import { TechCard } from "../TechCard/TechCard"
import { TechList } from "./style"

export function TechContainer ({ userTechs, setShowModal }){
    function renderTechs (){
        return userTechs.map((tech) => {
            return <TechCard tech={ tech } key={ tech.id } setShowModal={ setShowModal } />
        })
    }

    if (!userTechs.length){
        return (
            <div>
                <h2>Sua lista de Techs está vazia.</h2>
            </div>
        )
    }

    return (
        <TechList>
            { renderTechs () }
        </TechList>
    )
}
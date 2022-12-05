

export function InputForm ({ labelName, inputType, text, toForm }){
    return (
        <>
            <label>{ labelName }</label>
            <input type={ inputType } placeholder={ text } { ...toForm } />
        </>
    )
}
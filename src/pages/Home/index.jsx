import { loginAccount } from "../../APIs/login"


export function Home (){
    function teste(data){
        loginAccount (JSON.stringify(data))
    }

    return (
        <>
            <button onClick={() => teste({email: "teste@gmail.com", password: "12345"})}>teste</button>
            <p>Home</p>
        </>
    )
}
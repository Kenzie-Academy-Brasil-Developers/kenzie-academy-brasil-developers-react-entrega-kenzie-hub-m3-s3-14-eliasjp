import { api } from "./base";

export async function loginAccount (data){
    try {
        await api.post("/sessions", data, {
            headers: {
                Accept: "application/json"
            }
        })
        .then(resp => console.log(resp.json))
    }
    catch (error){
        console.log(error)
    }

}
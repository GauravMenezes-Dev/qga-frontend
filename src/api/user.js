import axios from "axios";

const URL = "https://java-app-qga.herokuapp.com/api/user";

export const login = async (username, password) => {
    
    const LoginUserModel = {username, password};
    try{
        const data = await axios.post(`${URL}/login`, LoginUserModel);
        return data.data;
    }
    catch(e){
        console.log(e);
        return e.response.data;
    }
}
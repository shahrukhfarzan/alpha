import axios from "./";

export const loginApi = async(body)=>{
    try{
        let data = await axios.post('auth/login',body);
        return data.data;
    }catch(e){
         throw new Error(e);
    }
}
// export default loginApi;
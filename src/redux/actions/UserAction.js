import { Base_URL } from "../../config/api"
import { Get_Users_By_Email } from "../contances/UserContant"


export const GetUsersByEmail=()=>async(dispatch,getState)=>{
    let userToken=JSON.parse(localStorage.getItem("token"))
 
    let user=await(await fetch(`${Base_URL}/User/getbyemail`,{
        method:"GET",
        headers:{
            "Authorization":`Barear ${userToken}`
        }
    })).json()

    dispatch({
        type:Get_Users_By_Email,
        payload:user
    })

}
import { Base_URL } from "../../config/api"
import { Get_About, Get_About_By_Id } from "../contances/AboutConstant"



export const getAboutAction=()=>async(dispatch,getState)=>{
    let about=await(await fetch(`${Base_URL}/About/Aboutget`)).json()
    dispatch({
        type:Get_About,
        payload:about.data
    })
}


export const getAboutById=(id)=>async(dispatch,getState)=>{
    let about =await(await (fetch(`${Base_URL}/About/get/${id}`))).json()
    dispatch({
        type:Get_About_By_Id,
        payload:about.data
    })
}
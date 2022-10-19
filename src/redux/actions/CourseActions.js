import{Base_URL} from "../../config/api"
import { Get_Courses , Get_Courses_By_Id } from "../contances/CourseContant"



export const getCourseActions=()=>async(dispatch,getState)=>{
    let courses=await (await fetch(`${Base_URL}/Course/getall`)).json()
    dispatch({
        type:Get_Courses,
        payload:courses.data
    })

}

export const getCoursesByIdAction=(id)=>async(dispatch,getState)=>{
    let courses=await(await fetch(`${Base_URL}/course/get/${id}`)).json()
    dispatch({
        type:Get_Courses_By_Id,
        payload:courses.data
    })
}
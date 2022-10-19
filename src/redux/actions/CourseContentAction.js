import { Base_URL } from "../../config/api"
import { Get_Courses_Contents } from "../contances/CourseContentConstans"



export const getCourseContentAction=()=>async(dispatch,getState)=>{
    let courseContent=await(await fetch(`${Base_URL}/course/getcoursecontent`)).json()
    dispatch({
        type:Get_Courses_Contents,
        payload:courseContent.data
    })
}
import{Base_URL} from "../../config/api"
import { Get_Courses } from "../contances/CourseContances"


export const getCourseActions=()=>async(dispatch,getState)=>{
    let courses=await (await fetch(`${Base_URL}/Course/getall`)).json()
    dispatch({
        type:Get_Courses,
        payload:courses.data
    })

}
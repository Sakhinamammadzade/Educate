import { Base_URL } from "../../config/api";
import{Get_All} from "../contances/CourseCategoryContants"


export const getCourseCategoryActions=()=>async(dispatch,getState)=>{
    let result =await(await fetch(`${Base_URL}/CourseCategory/getallCategory`)).json()
    dispatch({
        type:Get_All,
        payload:result.data
    })
}


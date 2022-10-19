import {Get_Courses, Get_Courses_By_Id } from "../contances/CourseContant";


export const courseReducers=(state={courses:[]},action)=>{
     switch(action.type){
        case Get_Courses:
            return{
                ...state,
                courses:action.payload
            }
            case Get_Courses_By_Id:
                return{
                    ...state,
                    courses:action.payload
                }
         default:
            return state;   
     }
}
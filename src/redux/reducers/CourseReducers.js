import { Get_Courses } from "../contances/CourseContances"


export const courseReducers=(state={courses:[]},action)=>{
     switch(action,type){
        case Get_Courses:
            return{
                ...state,
                courses:action.payload
            }
         default:
            return state;   
     }
}
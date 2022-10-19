import { Get_Courses_Contents } from "../contances/CourseContentConstans";


export const coursesContentReducer=(state={courses_content:[]},action)=>{
    switch (action.type) {
        case Get_Courses_Contents:
          return{
            ...state,
            courses_content:action.payload
          }
            
    
        default:
            return state;
    }
}
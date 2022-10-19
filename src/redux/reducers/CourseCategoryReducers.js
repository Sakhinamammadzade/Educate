import { Get_All } from "../contances/CourseCategoryContants.js"


 export const CourseCategoryReducer=(state={category:[]},action)=>{
    switch (action.type) {
        case Get_All:
            
        return{
            ...state,
            category:action.payload
        }
    
        default:
          return state
    }
}
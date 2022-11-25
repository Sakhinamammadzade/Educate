import { Get_About, Get_About_By_Id } from "../contances/AboutConstant";



export const aboutReducers=(state={about:[]},action)=>{
    switch (action.type) {
        case Get_About:
           return{
              ...state,
              about:action.payload
           } 
         case Get_About_By_Id:
            return{
                ...state,
                about:action.payload
            }
            
    
        default:
            return state;
    }
}
import { Get_Users_By_Email } from "../contances/UserContant";

export const userReducers=(state={user:[]},action)=>{
    switch (action.type) {
      
        case Get_Users_By_Email:
            return{
                ...state,
                user:action.payload
            }
            
        default:
          return state;
    }
}
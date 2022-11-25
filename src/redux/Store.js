import {applyMiddleware,combineReducers,createStore} from "@reduxjs/toolkit";
import { aboutReducers } from "./reducers/AboutReducers";
import { CourseCategoryReducer } from "./reducers/CourseCategoryReducers";
import { coursesContentReducer } from "./reducers/CourseContentReducer";
import { courseReducers } from "./reducers/CourseReducers";
import { userReducers } from "./reducers/UserReducers";
const {default:thunk}=require("redux-thunk")


const reducers=combineReducers({
    courses:courseReducers,
    category:CourseCategoryReducer,
    courses_content:coursesContentReducer,
    user:userReducers,
    about:aboutReducers
})

const initialState={

}

const middleware=[thunk]

const store=createStore(reducers,initialState,applyMiddleware(...middleware))

export default store;
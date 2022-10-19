import {applyMiddleware,combineReducers,createStore} from "@reduxjs/toolkit";
import { CourseCategoryReducer } from "./reducers/CourseCategoryReducers";
import { coursesContentReducer } from "./reducers/CourseContentReducer";
import { courseReducers } from "./reducers/CourseReducers";
const {default:thunk}=require("redux-thunk")


const reducers=combineReducers({
    courses:courseReducers,
    category:CourseCategoryReducer,
    courses_content:coursesContentReducer
})


const initialState={
    
}

const middleware=[thunk]

const store=createStore(reducers,initialState,applyMiddleware(...middleware))

export default store;
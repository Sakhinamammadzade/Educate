import {applyMiddleware,combineReducers,createStore}from" @reduxjs/toolkit";
import { courseReducers } from "./reducers/CourseReducers";
const {default:thunk}=require("redux-thunk")


const reducers=combineReducers({
    courses:courseReducers
})


const initialState={
    courses:[]
}

const middleware=[thunk]

const store=createStore(reducers,initialState,applyMiddleware(...middleware))

export default store;
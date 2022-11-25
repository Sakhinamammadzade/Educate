import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Header from '../component/header/Header'
import { GetUsersById } from '../redux/actions/UserAction'

function Admin  (){
    const{users}=useSelector((state)=>state.users)
    const dispatch=useDispatch()
    const{id}=useParams()

    useState(()=>{
        dispatch(GetUsersById(id))
    },[])
    console.log(users)
    return (
        <>
        <Header/>
        </>
      
    )
}

export default Admin


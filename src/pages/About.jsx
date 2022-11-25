import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Banner from '../component/banner/Banner'

import { getAboutAction, getAboutById } from '../redux/actions/AboutAction'

function About (){
  const{about}=useSelector((state)=>state.about)
  const dispatch=useDispatch()
  const{id}=useParams()

  useState(()=>{
    dispatch(getAboutById(id))
  },[])
  console.log(about);

  return (
    <>
         <Banner coverPhoto={"https://comparassetsource.s3.amazonaws.com/media/blog/article/pexels-photo-4348401.jpeg"} title={"Education Courses"} subTitle="" searchInput={true} />
           <Grid container width="60%" margin="auto">
        
             <p></p>
         
         
          </Grid>
        
      

       
  
      
     

    </>
  )
}

export default About
import React from 'react'
import Banner from '../component/banner/Banner'
import AddCourse from '../component/courses/AddCourse'
import Header from '../component/header/Header'

function CreateCourse(){
  return (
    <div>
     <Header/>
     <Banner bannerHeight="20%" title="Add course"/>
     <AddCourse/>
    </div>
  )
}

export default CreateCourse

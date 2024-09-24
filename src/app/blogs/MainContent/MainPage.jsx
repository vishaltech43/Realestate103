"use client"
import React, { useState } from 'react'
import BlogList from '../BlogsList/BlogList'
import Sidebar from '../Sidebar/Sidebar'

const MainPage = () => {
  const [searchedBlog,setsearchedBlog]=useState([])

  const searchedBlogs=(data)=>{
    setsearchedBlog(data)
  }


  return (
    <div>
        <div className="mx-auto flex flex-col lg:flex-row gap-6 px-5 md:px-16">
        <BlogList  searchedBlog={searchedBlog}/>
        <Sidebar searchedBlogs={searchedBlogs}/>
        </div>
    </div>
  )
}

export default MainPage


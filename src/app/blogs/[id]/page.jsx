import AboutMe from '@/app/blogsDetail/AboutMe'

import CommentForm from '@/app/blogsDetail/commentsection/CommentForm'
import RelatedPost from '@/app/blogsDetail/RelatedPost'
import postsData from '../postsData.json'

import React from 'react'
import CommonBanner from '../../../components/CommonBanner'
const getblogByName=(name)=>{
  return postsData.find((post)=>post.id==name);
}
const page = ({params}) => {
    const { id } = params; 
    console.log(id)
    const posts = getblogByName(id);
  console.log(posts)
    if (!posts) {
      return <div>Property not found.</div>;
    }
  return (
    <div>
         <CommonBanner image={'/images/breadcrumb-blogs.jpg'} title={'Blogs'}/>
      <AboutMe name={posts.title} image={posts.imageUrl} desc={posts.description} date={posts.date}/>
      <CommentForm/>
      <RelatedPost type={posts.type}/>
    </div>
  )
}

export default page


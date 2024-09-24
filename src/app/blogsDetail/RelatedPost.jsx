"use client";
import React, { useState, useEffect } from "react";
import PostCard from "../blogs/BlogsList/PostCard";
import postdata from "../blogs/postsData.json";

const RelatedPost = ({ type }) => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const filteredPosts = postdata.filter(post => post.type === type);
    setPostsData(filteredPosts);
  }, [type]);

  return (
    <div>
      <div className="container mx-auto px-4 mb-6 w-5/6">
        <h3 className="text-[45px] text-center font-bold mb-8 font-serif">
          Related Posts
        </h3>
        <h2 className="text-2xl font-bold mb-4"></h2>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {postsData.length > 0 ? (
              postsData.map(post => (
                <div key={post.id}>
                  <PostCard {...post} />
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">No posts found for this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;

"use client";
import { useEffect, useState, useCallback } from "react";
import BlogSearch from "./BlogSearch";
import FeaturedProperties from "./FeaturedProperties";
import RecentListedProperty from "./RecentListedProperty";
import postsData from "../postsData.json";
const Sidebar = ({ searchedBlogs }) => {
  const [searchPost, setSearchPost] = useState([]);
  const searchDdata = useCallback((data) => {
    setSearchPost(data);
  }, []);
  useEffect(() => {
    if (searchPost.length > 0) {
      searchedBlogs(searchPost);
    }else{
      searchedBlogs(postsData
      );
    }
  }, [searchPost, searchedBlogs]);


  return (
    <aside className="w-full md:w-2/5 mt-10  md:mt-0">
      <BlogSearch searchDdata={searchDdata} />
      <FeaturedProperties />
      <RecentListedProperty />
    </aside>
  );
};

export default Sidebar;

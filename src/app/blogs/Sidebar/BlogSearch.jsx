"use client";
import React, { useState, useEffect } from "react";
import PostCard from "../BlogsList/PostCard";
import postsData from "../postsData.json";

const BlogSearch = ({ searchDdata }) => {
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [resultsFound, setResultsFound] = useState(false);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredPosts([]);
      setNoResults(false);
      setResultsFound(false);
      if (searchDdata) {
        searchDdata([]);
      } else {
        console.log('NoSearch');
      }
    }
  }, [search, searchDdata]);

  const handleSearch = () => {
    if (search.trim() === "") {
      return; 
    }
    
    setLoading(true);
    setNoResults(false);
    setResultsFound(false);

    setTimeout(() => {
      const filtered = postsData.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.description.toLowerCase().includes(search.toLowerCase())
      );

      if (searchDdata) {
        if (filtered.length === 0) {
          searchDdata("NoSearch");
          setNoResults(true);
        } else {
          searchDdata(filtered);
          setResultsFound(true);
        }
      } else {
        console.error('searchDdata function is undefined');
      }

      setFilteredPosts(filtered);
      setLoading(false);
    }, 1000); 
  };

  const toShow = filteredPosts.length > 0 ? filteredPosts : postsData.slice(1, 6);

  return (
    <aside>
      <h3 className="text-[24px] md:text-[30px] font-bold mb-6 md:mb-10 font-serif ">
        Search Blog
      </h3>
      <div >
        <input
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-2xl"
        />
        <button
          onClick={handleSearch}
          className="mt-4 w-full bg-[#1c1c82] hover:bg-[#2e2ea3] text-white px-4 py-[10px] text-[20px] rounded-2xl font-semibold"
        >
          Search
        </button>
      </div>
      
      {loading && <p className="mt-4 text-center block lg:hidden">Loading...</p>}
      
      {noResults && !loading && <p className="mt-4 text-center text-red-500 block lg:hidden">No results found for your search</p>}
      
      {resultsFound && !loading && !noResults && <p className="mt-4 text-center text-green-500 block lg:hidden">here is your searched blog post.</p>}

      {toShow.length > 0 && (
        <div className="mt-6 mb-20 block lg:hidden">
          <h3 className="text-[21px] font-bold mb-4 font-serif">
            Latest Blog
          </h3>
          {toShow.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      )}
    </aside>
  );
};

export default BlogSearch;


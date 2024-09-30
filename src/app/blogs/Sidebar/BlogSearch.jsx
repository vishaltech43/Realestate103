"use client";
import React, { useState, useEffect } from "react";
import PostCard from "../BlogsList/PostCard";
import postsData from "../postsData.json";
import { Autocomplete, TextField, CircularProgress } from '@mui/material';

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

  const handleInputChange = (event, value) => {
    setSearch(value);
    if (value) {
      handleSearch();
    }
  };

  const toShow = filteredPosts.length > 0 ? filteredPosts : postsData.slice(1, 6);

  return (
    <aside>
      <h3 className="text-[24px] md:text-[30px] font-bold mb-6 md:mb-10 font-serif ">
        Search Blog
      </h3>
      
      <Autocomplete
  className="border-1 rounded-2xl"
  freeSolo
  options={postsData.map(post => post.title)}
  onInputChange={handleInputChange}
  renderInput={(params) => (
    <TextField 
      {...params} 
      placeholder="Search here..." 
      className="w-full"
      InputProps={{
        ...params.InputProps,
        style: {
          outline: 'none',
          boxShadow: 'none',
        },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'black', 
             borderRadius: '16px',
          },
          '&:hover fieldset': {
            borderColor: 'transparent',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'transparent',
          },
        },
      }}
    />
  )}
/>

      
      <button
        onClick={handleSearch}
        className="mt-4 w-full bg-[#1c1c82] hover:bg-[#2e2ea3] text-white px-4 py-[10px] text-[20px] rounded-2xl font-semibold"
      >
        Search
      </button>
      
      {loading && <p className="mt-4 text-center block lg:hidden"><CircularProgress /></p>}
      
      {noResults && !loading && <p className="mt-4 text-center text-red-500 block lg:hidden">No results found for your search</p>}
      
      {resultsFound && !loading && !noResults && <p className="mt-4 text-center text-green-500 block lg:hidden">Here are your searched blog posts.</p>}

      {toShow.length > 0 && (
        <div className="mt-6 mb-20 block lg:hidden">
          <h3 className="text-[21px] font-bold mb-4 font-serif">Latest Blog</h3>
          {toShow.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      )}
    </aside>
  );
};

export default BlogSearch;


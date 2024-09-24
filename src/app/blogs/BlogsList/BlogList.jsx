"use client";
import React, { useState, useEffect } from "react";
import PostCard from "../BlogsList/PostCard";
import postData from "../postsData.json";
import ReactPaginate from "react-paginate";
import Image from 'next/image'; 
import './blogListPagination.css';

const BlogList = ({ searchedBlog }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); 
  const postsPerPage = 9;

  const toShow = searchedBlog === "NoSearch" ? [] : (searchedBlog.length < 1 ? postData : searchedBlog);
  const totalPages = Math.ceil(toShow.length / postsPerPage);
  const currentPosts = toShow.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1); 
  };

  useEffect(() => {
    setLoading(true); 
    const timer = setTimeout(() => {
      setLoading(false); 
      setCurrentPage(1); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, [searchedBlog]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="lg:w-6/6 w-full hidden lg:block">
        <h3 className="text-[30px] font-bold mb-10 font-serif">Latest Posts</h3>
        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <h1 className="text-blue-700 pt-5">Loading blogs...</h1>
          </div>
        ) : searchedBlog === "NoSearch" ? (
          <div className="text-center text-red-500 text-lg">No results found for your search.</div>
        ) : (
          <div className="space-y-6">
            {currentPosts.length > 0 ? (
              <>
                <div className="flex flex-col lg:flex-row gap-6">
                  {currentPosts.slice(0, 2).map((post, index) => (
                    <div key={post.id} className={`lg:w-${index === 0 ? '2/3' : '1/3'} w-full`}>
                      <PostCard {...post} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                  {currentPosts.slice(2, 4).map((post, index) => (
                    <div key={post.id} className={`lg:w-${index === 0 ? '1/3' : '2/3'} w-full`}>
                      <PostCard {...post} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                  {currentPosts.slice(4, 7).map((post) => (
                    <div key={post.id} className="lg:w-1/3 w-full">
                      <PostCard {...post} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                  {currentPosts.slice(7, 9).map((post) => (
                    <div key={post.id} className={`lg:w-${post.id % 2 === 0 ? '2/3' : '1/3'} w-full`}>
                      <PostCard {...post} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">No posts available.</div>
            )}
          </div>
        )}
       
        {!loading && totalPages > 1 && searchedBlog !== "NoSearch" &&  (
          <ReactPaginate
            pageCount={totalPages}
            onPageChange={handlePageChange}
            containerClassName="flex justify-center items-center mb-[100px] mt-24"
            pageClassName="px-6 py-3 border text-[#1c1c82] text-2xl border border-gray-400"
            pageLinkClassName="cursor-pointer"
            activeClassName="activePage" 
            disabledClassName="disabledPage" 
            previousLabel={
              <div className="px-6 py-4 rounded-tl-2xl rounded-bl-2xl border text-[#1c1c82] border-gray-400">
                <Image
                  src="/images/icons8-arrow-50.png" 
                  alt="Previous"
                  className="h-6 w-6 rotate-180"
                  width={24} 
                  height={24}
                />
              </div>
            }
            nextLabel={
              <div className="px-6 py-4 border rounded-tr-2xl rounded-br-2xl text-[#1c1c82] border-gray-400">
                <Image
                  src="/images/icons8-arrow-50.png" 
                  alt="Next"
                  className="h-6 w-6"
                  width={24} 
                  height={24} 
                />
              </div>
            }
          />
        )}
      </div>
    </>
  );
};

export default BlogList;

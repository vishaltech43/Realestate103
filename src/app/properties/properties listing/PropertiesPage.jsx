import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import PropertyCards from "../../../components/property/PropertyCards";
import './pagination.css';


const stateCityMapping = {

  Illinois: ['Miami','Austin','New York','London'],
  Texas: ['Houston', 'Dallas', 'San Francisco'],
  Florida: ['Miami', 'Orlando', 'Tampa','Los Angeles'],
};

const PropertiesPage = ({ properties }) => {
  const noBorderOnFocusStyle = {
    border: "none",
    boxShadow: "none",
  };

  const [filterType, setFilterType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterState, setFilterState] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterArea, setFilterArea] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;


  const cities = stateCityMapping[filterState] || [];
  

  useEffect(() => {
    setFilterCity("");
  }, [filterState]);

  const filteredProperties = properties
    .filter((property) => !filterType || property.type === filterType)
    .filter(
      (property) => !filterCategory || property.category === filterCategory
    )
    .filter(
      (property) => !filterState || property.address?.state === filterState
    )
    .filter((property) => !filterCity || property.address?.city === filterCity)
    .filter((property) => {
      if (!filterArea) return true;
      if (filterArea === "downtown")
        return property.address?.neighborhood === "downtown";
      if (filterArea === "suburban")
        return property.address?.neighborhood === "suburban";
      if (filterArea === "rural")
        return property.address?.neighborhood === "rural";
      return false;
    })
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "beds") return a.beds - b.beds;
      if (sortBy === "baths") return a.baths - b.baths;
      if (sortBy === "squareFootage") return a.squareFootage - b.squareFootage;
      return 0;
    });

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1); 
  };

  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    startIndex,
    startIndex + propertiesPerPage
  );

  return (
    <div className="container mx-auto">


    <div className=" pt-6 px-5 md:px-20 pb-6 ">
      <h1 className="font-bold text-4xl font-serif mt-20 mx-4 sm:mx-20">
        All Properties
      </h1>

      <div className="bg-white mx-2 sm:mx-3 lg:mx-12 rounded-2xl border mt-8 mb-8 border-gray-400">
        <div className="flex flex-wrap p-2 w-full md:w-3/5">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-4 sm:mb-0">
            <select
              style={noBorderOnFocusStyle}
              className="w-full py-2 rounded-md sm:text-sm"
              onChange={(e) => setFilterType(e.target.value)}
              value={filterType}
            >
              <option value="">Type</option>
              <option value="commercial">Commercial</option>
              <option value="residential">Residential</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-4 sm:mb-0">
            <select
              style={noBorderOnFocusStyle}
              className="w-full py-2 rounded-md sm:text-sm"
              onChange={(e) => setFilterCategory(e.target.value)}
              value={filterCategory}
            >
              <option value="">Category</option>
              <option value="sales">Sales</option>
              <option value="rentals">Rentals</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-4 sm:mb-0">
            <select
              style={noBorderOnFocusStyle}
              className="w-full py-2 rounded-md sm:text-sm"
              onChange={(e) => setFilterState(e.target.value)}
              value={filterState}
            >
              <option value="">States</option>
              
              <option value="Illinois">Illinois</option>
              <option value="Texas">Texas</option>
              <option value="Florida">Florida</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-4 sm:mb-0">
            <select
              style={noBorderOnFocusStyle}
              className="w-full py-2 rounded-md sm:text-sm"
              onChange={(e) => setFilterCity(e.target.value)}
              value={filterCity}
            >
              <option value="">Cities</option>
              {cities.map((cityOption) => (
                <option key={cityOption} value={cityOption}>
                  {cityOption}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-4 sm:mb-0">
            <select
              style={noBorderOnFocusStyle}
              className="w-full py-2 rounded-md sm:text-sm"
              onChange={(e) => setFilterArea(e.target.value)}
              value={filterArea}
            >
              <option value="">Areas</option>
              <option value="downtown">Downtown</option>
              <option value="suburban">Suburban</option>
              <option value="rural">Rural</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-4 sm:mb-0">
            <select
              style={noBorderOnFocusStyle}
              className="w-full py-2 rounded-md sm:text-sm"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              <option value="">Sort by</option>
              <option value="price">Sort by Price</option>
              <option value="beds">Sort by Beds</option>
              <option value="baths">Sort by Baths</option>
              <option value="squareFootage">Sort by Square Footage</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -m-4 mx-2 sm:mx-5 md:mx-[1rem] mt-5">
        {currentProperties.length > 0 ? (
          currentProperties.map((property) => (
            <PropertyCards
              key={property.id}
              image={property.image}
              price={property.price}
              title={property.name}
              address={`${property.address?.street || "N/A"}, ${
                property.address?.city || "N/A"
              }`}
              beds={property.beds}
              baths={property.baths}
              sqft={property.squareFootage}
              category={property.category}
              id={property.id}
              featured={property.featured}
            />
          ))
        ) : (
          <p>No available properties</p>
        )}
      </div>

      {totalPages > 1 && (
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
              <img
                src="./images/icons8-arrow-50.png"
                alt="Previous"
                className="h-6 w-6 rotate-180"
              />
            </div>
          }
          nextLabel={
            <div className="px-6 py-4 border rounded-tr-2xl rounded-br-2xl text-[#1c1c82] border-gray-400">
              <img
                src="./images/icons8-arrow-50.png"
                alt="Next"
                className="h-6 w-6"
              />
            </div>
          }
        />
      )}
    </div>    </div>
  );
};

export default PropertiesPage;

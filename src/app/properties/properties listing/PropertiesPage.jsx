import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import PropertyCards from "../../../components/property/PropertyCards";
import './pagination.css';
import { FormControl,Select,MenuItem, Box } from "@mui/material";
import Link from "next/link";
import AppsIcon from '@mui/icons-material/Apps';
import WindowIcon2 from '@mui/icons-material/Window';
import ListIcon from '@mui/icons-material/List';
const stateCityMapping = {
  Illinois: ['Miami', 'Austin', 'New York', 'London'],
  Texas: ['Houston', 'Dallas', 'San Francisco'],
  Florida: ['Miami', 'Orlando', 'Tampa', 'Los Angeles'],
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
  const [propertiesPerPage, setPropertiesPerPage] = useState(9); 
  const [layoutType,setLayoutType]=useState('grid');
  useEffect(()=>{
    const saveLayout=localStorage.getItem('layout');
    if(saveLayout)
    {
      setLayoutType(JSON.parse(saveLayout))
    }
  },[])

  const cities = filterState ? stateCityMapping[filterState] : Object.values(stateCityMapping).flat();

  useEffect(() => {
    setFilterCity(""); 
  }, [filterState]);

  const filteredProperties = properties
    .filter((property) => !filterType || property.type === filterType)
    .filter((property) => !filterCategory || property.category === filterCategory)
    .filter((property) => !filterState || property.address?.state === filterState)
    .filter((property) => !filterCity || property.address?.city === filterCity)
    .filter((property) => {
      if (!filterArea) return true;
      return property.address?.neighborhood === filterArea;
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
  const currentProperties = filteredProperties.slice(startIndex, startIndex + propertiesPerPage);

  return (
    <div className="container mx-auto">
      <div className="pt-6 px-5 md:px-9 pb-6">
        <h1 className="font-bold text-4xl font-serif mt-20">All Properties</h1>

        <div className="bg-white rounded-2xl border mt-8 mb-8 border-gray-400">
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
        <FormControl className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-4 sm:mb-0">
             <Box sx={{marginBottom:'20px'}}>Properties per page</Box>
              <Select
                value={propertiesPerPage}
                onChange={(e) => setPropertiesPerPage(Number(e.target.value))}
              >
                <MenuItem value={6}>6 Properties</MenuItem>
                <MenuItem value={9}>9 Properties</MenuItem>
              </Select>
            </FormControl>

            <FormControl className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 mb-4 sm:mb-0 lg:ml-5">
             <Box sx={{marginBottom:'20px'}}>Choose layout</Box>
              <Select
                value={layoutType}
                onChange={(e) =>{setLayoutType(e.target.value)
                  const gridlayout=JSON.stringify(e.target.value)
                  localStorage.setItem('layout',gridlayout)
                }}
              >
                <MenuItem value={'grid'} className=""><AppsIcon/>Grid 1</MenuItem>
                <MenuItem value={'grid2'}><WindowIcon2/>Grid 2</MenuItem>
                <MenuItem value={'list'}><ListIcon/>list</MenuItem>
              </Select>
            </FormControl>
            {
              layoutType=='grid'&&(
                <div className="flex flex-wrap -m-4 mx-2 sm:mx-5 md:mx-[1rem] mt-5">

                {currentProperties.length > 0 ? (
                  currentProperties.map((property) => (
                    <PropertyCards
                      key={property.id}
                      image={property.image}
                      price={property.price}
                      title={property.name}
                      address={`${property.address?.street || "N/A"}, ${property.address?.city || "N/A"}`}
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
              )
            }
       
       {
  layoutType === 'list' && (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full bg-white border border-gray-400">
        <thead>
          <tr>
            <th className="px-2 py-2 text-left">Image</th>
            <th className="px-2 py-2 text-left">Name</th>
            <th className="px-2 py-2 text-center">Price</th>
            <th className="px-2 py-2 text-left">Category</th>
            <th className="px-2 py-2 text-left">Address</th>
            <th className="px-2 py-2 text-center">Beds</th>
            <th className="px-2 py-2 text-center">Baths</th>
            <th className="px-2 py-2 text-center">Sqft</th>
          </tr>
        </thead>
        <tbody>
          {currentProperties.length > 0 ? (
            currentProperties.map((property) => (
              <Link href={`/properties/${property.id}`} passHref legacyBehavior key={property.id}>
                <tr className="hover:bg-gray-100 cursor-pointer">
                  <td className="px-2 py-2">
                    <img src={property.image} alt={property.name} className="h-20 w-20 rounded-md" />
                    {property.featured && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold mt-1">Featured</span>
                    )}
                  </td>
                  <td className="px-2 py-2 text-[16px] md:text-[20px] font-medium text-blue-900">{property.name}</td>
                  <td className="px-2 py-2 text-center">${property.price}</td>
                  <td className="px-2 py-2">
                    <span className={`bg-${property.category === "sales" ? "blue-800" : "sky-500"} text-white text-[13px] px-3 py-1 rounded-lg`}>
                      {property.category}
                    </span>
                  </td>
                  <td className="px-2 py-2">
                    <div className="flex items-center">
                      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 13V7M15 10.0008L9 10M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {`${property.address?.street || "N/A"}, ${property.address?.city || "N/A"}`}
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center">
                    <img src="/Images/bed.png" className="w-5 sm:w-6 md:w-7" alt="Bed" /> {property.beds} Beds
                  </td>
                  <td className="px-2 py-2 text-center">
                    <img src="/Images/bath.png" className="w-5 sm:w-6 md:w-4" alt="Bath" /> {property.baths} Baths
                  </td>
                  <td className="px-2 py-2 text-center">
                    <img src="/Images/sqft.png" className="w-5 sm:w-6 md:w-7" alt="Sqft" /> {property.squareFootage} Sqft
                  </td>
                </tr>
              </Link>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="border px-4 py-2 text-center">No available properties</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

  {
          layoutType === 'grid2' && (
            <div className="flex flex-wrap -mx-2 mt-5">
              {currentProperties.length > 0 ? (
                currentProperties.map((property) => (
                  <div key={property.id} className="w-full sm:w-1/2 p-2">
                    <Link href={`/properties/${property.id}`} passHref legacyBehavior>
                      <div className=" p-4 hover:shadow-lg transition-shadow">
                        <img src={property.image} alt={property.name} className="h-40 w-full object-cover mb-3 rounded-md" />
                       
                        <div className="flex gap-5">
                        <span className={`bg-${property.category === "sales" ? "blue-800" : "sky-500"} text-white text-[13px] px-3 py-1 rounded-lg`}>
                        {property.category}
                      </span>
                        {property.featured && (
                        <span className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold mt-1">featured</span>
                      )}
                          </div>
                        <h3 className="text-lg font-semibold">{property.name}</h3>
                        <p className="text-gray-600">${property.price}</p>
                        <div className="flex gap-5 mt-2">
                          <span className="flex gap-1"> <img src="/Images/bed.png" className="w-5 sm:w-6 md:w-7" alt="Bed" />{property.beds} Beds</span>
                          <span className="flex gap-1"> <img src="/Images/bath.png" className="w-5 sm:w-6 md:w-4" alt="Bath" /> {property.baths} Baths</span>
                          <span className="flex gap-1"> <img src="/Images/sqft.png" className="w-5 sm:w-6 md:w-7" alt="Sqft" /> {property.squareFootage} Sqft</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No available properties</p>
              )}
            </div>
          )
        }

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
                  src="./Images/icons8-arrow-50.png"
                  alt="Previous"
                  className="h-6 w-6 rotate-180"
                />
              </div>
            }
            nextLabel={
              <div className="px-6 py-4 border rounded-tr-2xl rounded-br-2xl text-[#1c1c82] border-gray-400">
                <img
                  src="./Images/icons8-arrow-50.png"
                  alt="Next"
                  className="h-6 w-6"
                />
              </div>
            }
          />
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;


import React, { useContext, useState, useEffect } from 'react';
import { Mycontext } from '../component/SignUp';
import { Link } from 'react-router-dom';
import useFetchProducts from '../component/CoustumeHook';
import ScrollReveal from 'scrollreveal';

const Categories = () => {

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.scroll-reveal', {
      delay: 100,
      distance: '50px',
      origin: 'bottom',
      interval: 100,
      reset: true
    });

    return () => {
      sr.destroy();
    };
  }, []);

  const { products, loading, error } = useFetchProducts();
  const [cate, setCate] = useState([]);
  const [fullFilter, setFullFilter] = useState(false);
  const [sort, setSort] = useState('');

  const handleCategory = (category) => {
    const filtering = products.filter((item) => item.category === category);
    setCate(filtering);
    setFullFilter(true);
  };

  const handleAll = () => {
    setCate(products);
    setFullFilter(false);
  };

  const handleChange = (e) => {
    setSort(e.target.value);
  };

  const sortedProducts = () => {
    let sorted = fullFilter ? [...cate] : [...products];

    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return sorted;
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row ">
      <div className="w-full md:w-1/4 pr-4 mb-8 md:mb-0">
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold mb-4 text-btnColor">Categories</h2>
          <div className="flex flex-col space-y-2 p-10">
            <button
              onClick={handleAll}
              className="flex items-center bg-gray-200 text-black gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-greenColor duration-300 hover:gap-2 hover:translate-x-3 scroll-reveal"
            >
              All
            </button>
            <button
              onClick={() => handleCategory("Boy fashion")}
              className="flex items-center bg-gray-200 text-black gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-greenColor duration-300 hover:gap-2 hover:translate-x-3 scroll-reveal"
            >
              Boys Fashion
            </button>
            <button
              onClick={() => handleCategory("Girl fashion")}
              className="flex items-center bg-gray-200 text-black gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-greenColor duration-300 hover:gap-2 hover:translate-x-3 scroll-reveal"
            >
              Girls Fashion
            </button>
            <button
              onClick={() => handleCategory("Feeding")}
              className="flex items-center bg-gray-200 text-black gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-greenColor duration-300 hover:gap-2 hover:translate-x-3 scroll-reveal"
            >
              Feeding
            </button>
            <button
              onClick={() => handleCategory("Accessories")}
              className="flex items-center bg-gray-200 text-black gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-greenColor duration-300 hover:gap-2 hover:translate-x-3 scroll-reveal"
            >
              Accessories
            </button>
            <button
              onClick={() => handleCategory("Toys")}
              className="flex items-center bg-gray-200 text-black gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-greenColor duration-300 hover:gap-2 hover:translate-x-3 scroll-reveal"
            >
              Toys
            </button>
            <button
              onClick={() => handleCategory("Books")}
              className="flex items-center bg-gray-200 text-black gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-greenColor duration-300 hover:gap-2 hover:translate-x-3 scroll-reveal"
            >
              Books
            </button>
            <button
              onClick={() => handleCategory("Footwear")}
              className="flex items-center bg-gray-200 text-black gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-greenColor duration-300 hover:gap-2 hover:translate-x-3 scroll-reveal"
            >
              Footwear
            </button>
            <button
              onClick={() => handleCategory("Bed")}
              className="flex items-center bg-gray-200 text-black gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-greenColor duration-300 hover:gap-2 hover:translate-x-3 scroll-reveal"
            >
              Beds
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-4 border-b-2 pb-2">
          <h2 className="text-2xl font-semibold">Products</h2>
          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="font-semibold text-gray-700">Sort By:</label>
            <select
              id="sort"
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts().map((item, id) => (
            <Link to={`/category/${item.id}`} key={id} className="w-full">
              <div className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h2>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-yellow-500">{'★'.repeat(item.stars)}{'☆'.repeat(5 - item.stars)}</p>
                  <h2 className="text-lg font-semibold text-gray-700">₹{item.price}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

import React, { useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Mycontext } from './SignUp';
import Footer from './Footer';

const ProductDetails = () => {
  const params = useParams();
  const { myCart, setMyCart, api } = useContext(Mycontext);
  const [carts] = api.filter((val) => params.id == val.id);

  const navigate = useNavigate();
  const value = localStorage.getItem('isLogin');
  const isLogin = JSON.parse(value);

  const addToCart = () => {
    const isClicked = myCart.find(item => item.id === carts.id);
    if (isClicked) {
      alert("Product already added");
    } else if (!isLogin) {
      alert("You don't have an account. Please login.");
      navigate('/signup');
    } else {
      const newCartItem = {
        id: carts.id,
        name: carts.name,
        price: carts.price,
        description: carts.description,
        image: carts.image,
        category: carts.category,
        quantity: 1,
        stars: carts.stars
      };

      setMyCart([...myCart, newCartItem]);
    }
  }

  

  const related = api.filter((rel) => rel.category === carts.category);

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <img
            src={carts.image}
            className="w-full md:w-[350px] rounded h-[350px] object-cover"
          />
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-2">{carts.name}</h2>
            <p className="text-yellow-500 text-3xl">{'★'.repeat(carts.stars)}{'☆'.repeat(5 - carts.stars)}</p>
            <p className="text-3xl font-semibold mt-2 mb-4">Price: ₹<span className='text-red-600'>{carts.price}</span></p>
            <p className="mb-4">
              {carts.description}
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <button onClick={addToCart} className="bg-btnColor text-white px-4 py-2 rounded hover:bg-black">
                Add to cart
              </button>
            </div>
            <p className="text-gray-500">Categories: {carts.category}</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="border-b border-gray-300">
            <ul className="flex space-x-8 overflow-x-auto">
              <li className="pb-2 border-b-2 border-btnColor whitespace-nowrap">Description</li>
              <li className="pb-2 whitespace-nowrap">Additional Information</li>
              <li className="pb-2 whitespace-nowrap">Reviews (5)</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Product Description</h3>
            <p className="mt-2">
              Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
              ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
              egestas semper. Aenean ultricies mi vitae est. Mauris placerat
              eleifend leo.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-btnColor">You may also like...</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((item, key) => (
              <Link  to={`/category/${item.id}`} key={key}>
                <div className="rounded p-4 w-full text-center">
                  <img
                    src={item.image}
                    className="w-full rounded mb-4 h-[200px] object-cover"
                  />
                  <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                  <p className="text-yellow-500 text-xl">{'★'.repeat(item.stars)}{'☆'.repeat(5 - item.stars)}</p>
                  <p className="text-xl font-semibold mb-2">₹{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;

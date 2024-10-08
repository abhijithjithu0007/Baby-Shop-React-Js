import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../Router/RouterApp';
import { wishContext } from '../Context/WishlistContext';
import { cartContext } from '../Context/CartContext';
import { useLoad } from '../Context/LoadingContext';
import axiosInstance from '../axiosInstance';

const Profile = () => {
  const { setIsLoggedIn } = useContext(Mycontext);
  const navigate = useNavigate();
  const { setMyWish } = useContext(wishContext)
  const { setMyPro } = useContext(cartContext)
  const { startLoad, stopLoad } = useLoad(useContext)


  const handleLogout = async () => {
    startLoad()
    try {
      await axiosInstance.post(`/api/user/logout`, {}, { withCredentials: true })
      navigate('/login')
      localStorage.setItem('isLogin', JSON.stringify(false));
      localStorage.removeItem('currentUser')
      navigate('/login');
      setIsLoggedIn(false);
      setMyWish([])
      setMyPro([])
    } catch (error) {
      console.log(error);
    } finally {
      stopLoad()
    }
  }


  const adress = localStorage.getItem('currentUser');
  const { name = '', email = '' } = adress ? JSON.parse(adress) : {}

  return (
    <section class=" bg-white flex font-medium items-center justify-center h-screen"> 
      <section className="w-80 mx-auto bg-gray-200 rounded-2xl px-8 py-6 shadow-lg">
        <div className="mt-6 w-fit mx-auto">
          <img src="https://i.pinimg.com/564x/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg" className="rounded-full w-28 " alt="profile picture" srcset=""></img>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-black font-bold text-2xl tracking-wide">{name}</h2>
          <span class="text-gray-600 font-semibold">{email}</span>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5 text-center" >
          Active
        </p>
        <div className='flex justify-center mt-8'>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-btnColor text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            <span className="mr-2">Logout</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>

        </div>

      </section>
    </section>
  );
};

export default Profile;

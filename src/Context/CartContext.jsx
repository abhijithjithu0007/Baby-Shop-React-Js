import React, { createContext, useState, useEffect, useContext } from 'react'
import { useLoad } from './LoadingContext';
import axiosInstance from '../axiosInstance';


export const cartContext = createContext()
const CartContextProvider = ({ children }) => {

  const currentUserData = JSON.parse(localStorage.getItem('currentUser'));
  const id = currentUserData?.id
  const islogin = JSON.parse(localStorage.getItem('isLogin'));
const {startLoad,stopLoad} = useLoad(useContext)

  const [total, setTotal] = useState([])
  const [myPro, setMyPro] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      startLoad()
      try {
        const resp = await axiosInstance.get(`/api/user/viewcartproducts/${id}`, {
          withCredentials: true
        });
        const data = resp.data.products || [];
        setMyPro(data);
      } catch (error) {
        console.log(error);
      }finally{
        stopLoad()
      }
    };

    fetchData();
  }, [id,islogin]);
  
 
  return (
    <cartContext.Provider value={{ total, setTotal, myPro, setMyPro }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider

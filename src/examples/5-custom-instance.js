import { useEffect } from 'react';
import authFetch from '../axios/custom';
import axios from 'axios';


const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
   try {
    const response1 = await authFetch("/react-store-products");
    const response2 = await axios(randomUserUrl);
    console.log(response1);
    console.log(response2);
   } catch (error) {
    console.log(error);
   }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;

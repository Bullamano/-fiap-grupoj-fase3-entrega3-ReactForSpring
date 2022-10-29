import React, { useEffect, useState } from 'react';
import CustomGrid from '../../Components/CustomGrid/CustomGrid';
import GreeterArea from '../../Components/GreeterArea/GreeterArea';
import CardArray from '../../ValueObjects/CardArray';
import { GetTutorialItems } from '../../Services/FetchAPI';
import './Home.css';

//TODO retornar greeter e cards

/**
 * Home screen da aplicação.
 * @returns JSX da Home screen.
 */
const Home = () =>
{
  const [returnAPI, setReturnAPI] = useState([]);

  async function fetchData()
  {
    const apiResponse = await GetTutorialItems();

    setReturnAPI(apiResponse);

    console.log(returnAPI);
  }

  useEffect(() =>
  {
    fetchData();
  }, []);

  return (
    <div className='Home-screen'>
      <GreeterArea />
      <CustomGrid cards={ returnAPI } />
    </div>
  );
};

export default Home;
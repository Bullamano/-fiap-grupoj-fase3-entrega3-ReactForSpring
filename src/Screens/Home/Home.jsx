import React, { useCallback, useEffect, useState } from 'react';
import CustomGrid from '../../Components/CustomGrid/CustomGrid';
import GreeterArea from '../../Components/GreeterArea/GreeterArea';
//import CardArray from '../../ValueObjects/CardArray';
import { GetTutorialItems } from '../../Services/FetchAPI';
import './Home.css';

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

    //console.log(returnAPI);
  }

  useEffect(() =>
  {
    //React reclama de react-hooks/exhaustive-deps,
    //contudo este é o uso pretendido.
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
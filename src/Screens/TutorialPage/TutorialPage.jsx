import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
//import CardArray from '../../ValueObjects/CardArray';
import { GetTutorialItemById } from '../../Services/FetchAPI';
import DeleteButton from '../../Components/DeleteButton/DeleteButton';

import './TutorialPage.css'

const TutorialPage = () =>
{
    let { id } = useParams();
    const [returnAPI, setReturnAPI] = useState([]);

    async function fetchData()
    {
        const apiResponse = await GetTutorialItemById(id);

        setReturnAPI(apiResponse);

        //console.log(returnAPI);
    }

    useEffect(() =>
    {
        //React reclama de react-hooks/exhaustive-deps,
        //contudo este é o uso pretendido.
        fetchData();
    }, []);

    const pageCard = returnAPI; //CardArray[id];

    return (
        <div className='Contents'>
            <Link to='/' className='Back-link'>
                <Box className='Floating-back'>
                    <ArrowBackIcon />
                </Box>
            </Link>
            <div className='Material-holder'>
                <div className='Upper-holder'>
                    <div className='Image-holder'>
                        <img className='Tutorial-image' src={ pageCard.imageUrl } alt={ 'Imagem de: ' + pageCard.title } />
                    </div>
                    <div className='Limit-width-box'>
                        <h1>{ pageCard.title }</h1>
                    </div>
                </div>
                <h2>Você precisa de...</h2>
                <div className='Limit-width-box'>
                    <h3>{ pageCard.materials }</h3>
                </div>
            </div>
            <h2>Como fazer...</h2>
            <div className='Limit-width-box'>
                <h3>{ pageCard.steps }</h3>
            </div>
            <DeleteButton id={ pageCard.id } />
            <div className='Divider-cards'>
            </div>
            <Divider />
        </div>
    );
};

export default TutorialPage;
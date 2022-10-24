import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
import CardArray from '../../ExampleTutorials/CardArray';

import './TutorialPage.css'

const TutorialPage = () => {

    let { id } = useParams();

    const pageCard = CardArray[id];

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
                        <img className='Tutorial-image' src={pageCard.imageUrl} alt={'Imagem de: ' + pageCard.title} />
                    </div>
                    <h1>{pageCard.title}</h1>
                </div>
                <h2>Você precisa de...</h2>
                <h3>{pageCard.materials}</h3>
            </div>
            <h2>Como fazer...</h2>
            <h3>{pageCard.steps}</h3>
            <div className='Divider-cards'>
                <Divider />
            </div>
        </div>
    );
};

export default TutorialPage;
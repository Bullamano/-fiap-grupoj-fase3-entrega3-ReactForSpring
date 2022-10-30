import React from 'react';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
import Box from '@mui/material/Box';

import './BackHomeButton.css'

/**
 * Botão para retornar à Home.
 * @returns Botão que, ao clicar, redireciona para a Home.
 */
const BackHomeButton = () =>
{
    return (
        <Link to='/' className='Back-link'>
            <Box className='Floating-back'>
                <ArrowBackIcon />
            </Box>
        </Link>
    );
};

export default BackHomeButton;
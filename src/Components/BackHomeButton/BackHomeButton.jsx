import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBackOutlined';
import './BackHomeButton.css'

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
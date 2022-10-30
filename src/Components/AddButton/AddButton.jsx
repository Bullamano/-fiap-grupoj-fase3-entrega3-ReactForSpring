import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import './AddButton.css'

const AddButton = ({ id }) =>
{
    return (
        <Link to='/add' className='Go-link'>
            <Box className='Add-floating-back'>
                <AddIcon />
            </Box>
        </Link>
    );
};

export default AddButton;
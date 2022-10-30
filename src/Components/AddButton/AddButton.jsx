import React from 'react';
import { Link } from "react-router-dom";

import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

import './AddButton.css'

/**
 * Botão para abrir a página de adição.
 * @returns Um botão com ícone que redireciona para a AddingPage.
 */
const AddButton = () =>
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
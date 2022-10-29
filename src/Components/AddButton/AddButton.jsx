import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import './AddButton.css'

const AddButton = ({ id }) =>
{
    //TODO lógicapara botão link para AddingPage

    return (
        <Box className='Add-floating-back'>
            <AddIcon />
        </Box>
    );
};

export default AddButton;
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';

import { DeleteTutorialItemById } from '../../Services/FetchAPI';

import './DeleteButton.css'

/**
 * Botão para deletaro item
 * @param {int} id ID do objeto a ser deletado 
 * @returns 
 */
const DeleteButton = ({ id }) =>
{
    const navigate = useNavigate();

    async function DeleteItem(id)
    {
        const response = await DeleteTutorialItemById(id);

        //console.log(response);

        if (response.status == '200' || response.status == '204')
        {
            alert('Item deletado com sucesso!')
            navigate('/');
        }
        else
        {
            alert('Houve um erro ao deletar o item. Tente novamente mais tarde.')
            navigate('/');
        }
    }

    return (
        <div onClick={ () => DeleteItem(id) }>
            <Box className='Delete-floating-back'>
                <DeleteIcon />
            </Box>
        </div>
    );
};

export default DeleteButton;
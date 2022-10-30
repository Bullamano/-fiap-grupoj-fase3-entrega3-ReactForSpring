import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { DeleteTutorialItemById } from '../../Services/FetchAPI';
import './DeleteButton.css'

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
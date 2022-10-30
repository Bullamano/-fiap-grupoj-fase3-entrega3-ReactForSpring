import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

import BackHomeButton from '../../Components/BackHomeButton/BackHomeButton';
import DeleteButton from '../../Components/DeleteButton/DeleteButton';

import { GetTutorialItemById, PutTutorialItemSimpleResponse } from '../../Services/FetchAPI';

import './TutorialPage.css'

/**
 * Página de visualização de itens.
 * Também contém as funções de modificar itens e excluí-los.
 * @returns A página de visualização de tutoriais.
 */
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

    const pageCard = returnAPI;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const smallFieldLength = 80;
    const bigFieldLength = 450;

    const navigate = useNavigate();

    function testSize(maxSize, actualSize)
    {
        if (actualSize === maxSize)
        {
            alert('Tamanho máximo para este campo atingido com ' + maxSize + ' caracteres.');
        }
    }

    async function UpdateItem(id, title, materials, steps, imageUrl, category)
    {
        const response = await PutTutorialItemSimpleResponse(id, title, materials, steps, imageUrl, category);

        if (response.status == '200' || response.status == '201')
        {
            alert('Item modificado com sucesso!')
            navigate('/');
        }
        else
        {
            alert('Houve um erro ao modificar o item. Tente novamente mais tarde.')
            navigate('/');
        }
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        try
        {
            UpdateItem(
                pageCard.id,
                e.target.title.value,
                e.target.materials.value,
                e.target.steps.value,
                e.target.imageUrl.value,
                e.target.category.value
            )
        }
        catch (error)
        {
            console.log(error)
        }
    }

    return (
        <div className='Contents'>
            <BackHomeButton />
            <div className='Material-holder'>
                <div className='Upper-holder'>
                    <div className='Image-holder'>
                        <img
                            className='Tutorial-image'
                            src={ pageCard.imageUrl }
                            alt={ 'Imagem de: ' + pageCard.title } />
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
            <Button onClick={ handleOpen }
                className='Modificar-button'
                variant="contained"
                style={ {
                    margin: "15px",
                    color: "#000000",
                    backgroundColor: "#FFA375"
                } }>
                Modificar item
            </Button>
            <Modal
                open={ open }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='Box-modal'>
                    <form onSubmit={ handleSubmit }>
                        <h3>
                            Modificando o item!
                        </h3>
                        <TextField
                            inputProps={ { maxLength: smallFieldLength } }
                            fullWidth
                            name='title'
                            label="Título"
                            variant="outlined"
                            defaultValue={ pageCard.title }
                            onKeyPress={ (e) => { e.key === 'Enter' && e.preventDefault(); } }
                            onChange={ (e) =>
                            {
                                testSize(smallFieldLength, e.target.value.length);
                            } } />
                        <br /><br />
                        <TextField
                            inputProps={ { maxLength: bigFieldLength } }
                            fullWidth
                            name='materials'
                            label="Materiais (Você precisa de...)"
                            variant="outlined"
                            defaultValue={ pageCard.materials }
                            onKeyPress={ (e) => { e.key === 'Enter' && e.preventDefault(); } }
                            onChange={ (e) =>
                            {
                                testSize(bigFieldLength, e.target.value.length);
                            } } />
                        <br /><br />
                        <TextField
                            inputProps={ { maxLength: bigFieldLength } }
                            fullWidth
                            name='steps'
                            label="Passo-a-passo (Como fazer...)"
                            variant="outlined"
                            defaultValue={ pageCard.steps }
                            onKeyPress={ (e) => { e.key === 'Enter' && e.preventDefault(); } }
                            onChange={ (e) =>
                            {
                                testSize(bigFieldLength, e.target.value.length);
                            } } />
                        <br /><br />
                        <TextField
                            inputProps={ { maxLength: bigFieldLength } }
                            fullWidth
                            name='imageUrl'
                            label="URL da imagem para o item"
                            variant="outlined"
                            defaultValue={ pageCard.imageUrl }
                            onKeyPress={ (e) => { e.key === 'Enter' && e.preventDefault(); } }
                            onChange={ (e) =>
                            {
                                testSize(bigFieldLength, e.target.value.length);
                            } } />
                        <br /><br />
                        <TextField
                            inputProps={ { maxLength: smallFieldLength } }
                            fullWidth
                            name='category'
                            label="Nome da categoria do item"
                            variant="outlined"
                            defaultValue={ pageCard.category }
                            onKeyPress={ (e) => { e.key === 'Enter' && e.preventDefault(); } }
                            onChange={ (e) =>
                            {
                                testSize(smallFieldLength, e.target.value.length);
                            } } />
                        <br /><br />
                        <Button
                            type='submit'
                            variant="contained"
                            style={ {
                                margin: "15px",
                                color: "#FFFFFF",
                                backgroundColor: "#2EE59D"
                            } }>
                            Modificar
                        </Button>
                    </form>
                </Box>
            </Modal>
            <DeleteButton id={ pageCard.id } />
            <div className='Divider-cards'>
                <Divider />
            </div>
        </div>
    );
};

export default TutorialPage;
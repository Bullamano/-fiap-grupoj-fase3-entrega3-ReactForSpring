import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PostTutorialItemSimpleResponse } from '../../Services/FetchAPI';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import BackHomeButton from '../../Components/BackHomeButton/BackHomeButton';
import './AddingPage.css';

const AddingPage = () =>
{
    const navigate = useNavigate();

    const smallFieldLength = 80;
    const bigFieldLength = 450;

    function testSize(maxSize, actualSize)
    {
        if (actualSize === maxSize)
        {
            alert('Tamanho máximo para este campo atingido com ' + maxSize + ' caracteres.');
        }
    }

    async function AddItem(title, materials, steps, imageUrl, category)
    {
        const response = await PostTutorialItemSimpleResponse(title, materials, steps, imageUrl, category);

        if (response.status == '200' || response.status == '201')
        {
            alert('Item adicionado com sucesso!')
            navigate('/');
        }
        else
        {
            alert('Houve um erro ao adicionar o item. Tente novamente mais tarde.')
            navigate('/');
        }
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        try
        {
            AddItem(
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
            <div className='Form-add'>
                <h2>Adicione seus próprios itens!</h2>
                <h3>Preencha os campos abaixo e adicione seu item.</h3>
                <h4>Os campos deste formulário são multi-linhas, sendo assim, pressionar "Enter" não enviará seu item (apenas o campo URL não é multi-linha).</h4>
                <form onSubmit={ handleSubmit }>
                    <TextField
                        inputProps={ { maxLength: smallFieldLength } }
                        fullWidth
                        multiline
                        name='title'
                        label="Título"
                        variant="outlined"
                        onChange={ (e) =>
                        {
                            testSize(smallFieldLength, e.target.value.length);
                        } } />
                    <br /><br />
                    <TextField
                        inputProps={ { maxLength: bigFieldLength } }
                        fullWidth
                        multiline
                        name='materials'
                        label="Materiais (Você precisa de...)"
                        variant="outlined"
                        onChange={ (e) =>
                        {
                            testSize(bigFieldLength, e.target.value.length);
                        } } />
                    <br /><br />
                    <TextField
                        inputProps={ { maxLength: bigFieldLength } }
                        fullWidth
                        multiline
                        name='steps'
                        label="Passo-a-passo (Como fazer...)"
                        variant="outlined"
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
                        onKeyPress={ (e) => { e.key === 'Enter' && e.preventDefault(); } }
                        onChange={ (e) =>
                        {
                            testSize(bigFieldLength, e.target.value.length);
                        } } />
                    <br /><br />
                    <TextField
                        inputProps={ { maxLength: smallFieldLength } }
                        fullWidth
                        multiline
                        name='category'
                        label="Nome da categoria do item"
                        variant="outlined"
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
                        Adicionar
                    </Button>
                </form>
            </div>
            <div className='Divider-add'>
                <Divider />
            </div>
        </div>
    );
};

export default AddingPage;
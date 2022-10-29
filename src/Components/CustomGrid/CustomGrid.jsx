import React from 'react';
import Grid from '@mui/material/Grid';
import CustomCard from '../CustomCard/CustomCard';
import './CustomGrid.css';

//TODO atualizar comentários de documentação

/**
 * Grid customizada para receber componentes CustomCard
 * que preenchem a tela com os procedimentos
 * @param {object} cards Objeto contendo as propriedades:
 * - 'title' (string com o título do procedimento)
 * - 'imageUrl' (URL da imagem do procedimento)
 * @returns Grid de CustomCard com informações de procedimentos
 */
const CustomGrid = ({ cards }) => {
    return (
        <div className='Grid-container'>
            <Grid className='Custom-grid' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {cards.map((card, index) =>
                    <Grid className='Custom-item' key={'Grid' + index} item>
                        <CustomCard key={'Card' + index} id={card.id} title={card.title} imageUrl={card.imageUrl} />
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default CustomGrid;
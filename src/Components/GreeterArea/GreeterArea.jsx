import React from 'react';
import Box from '@mui/material/Box';
import lightbulbImage from '../../Assets/lightbulb-512.png'
import './GreeterArea.css';

/**
 * Área com informações sobre o site em si, sua função e funcionalidades
 * @returns Área com informações para o usuário
 */
const GreeterArea = () => {
    return (
        <Box className='Greeter-box'>
            <div className='Greeter-container'>
                <div>
                    <h2 className='Greeter-title'>
                        Bem-vindos ao NeedHelp!
                    </h2>
                    <h3 className='Greeter-text'>
                        Aqui é o lugar onde você vai achar tutoriais muito (in)úteis para todas as suas necessidades!
                    </h3>
                </div>
                <img src={lightbulbImage} className='Lightbulb-Image' alt='Orange-yellow lightbulb' />
            </div>
        </Box>
    );
};

export default GreeterArea;
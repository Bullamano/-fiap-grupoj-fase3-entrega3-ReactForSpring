import React from 'react';
import Divider from '@mui/material/Divider';
import './Footer.css';

/**
 * Footer do site
 * @returns Footer com informações sobre o site e recursos usados
 */
const Footer = () => {
    return (
        <div className='App-footer'>
            <div className='Divider-footer'>
                <Divider />
            </div>
            {/* Books and toolbox icons by Icons8.
                Lightbulb image from FreePNGimg. */}
            <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/4Ph00pYDnJmy/books">
                Books
            </a>
            &nbsp;and&nbsp;
            <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/46891/toolbox">
                toolbox
            </a>
            &nbsp;icons by&nbsp;
            <a target="_blank" rel="noreferrer" href="https://icons8.com">
                Icons8
            </a>.
            <br/>
            Lightbulb image from&nbsp;
            <a target="_blank" rel="noreferrer" href="https://freepngimg.com/png/148846-bulb-yellow-free-download-png-hq">
                FreePNGimg
            </a>.
        </div>
    );
};

export default Footer;
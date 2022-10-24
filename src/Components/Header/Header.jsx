import React from 'react';
import { Link } from "react-router-dom";
import booksImage from '../../Assets/icons8-books-64.png'
import toolboxImage from '../../Assets/icons8-toolbox-64.png'
import './Header.css';

/**
 * Header da aplicação. Ele é flutuante e acompanha a rolagem.
 * @returns JSX do Header.
 */
const Header = () => {
    return (
        <div className='App-header' id='pageTop'>
            <Link to='/' className='Home-link'>
                <div className='Header-content'>
                    <img src={booksImage} alt='Icon of a stack of books.' />
                    <h1 className='Header-title'>Need Help</h1>
                    <img src={toolboxImage} alt='Icon of a toolbox' />
                </div>
            </Link>
        </div>
    );
};

export default Header;
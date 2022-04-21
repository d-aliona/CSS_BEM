import React from 'react';
import {Link} from 'react-router-dom';

import vector from './images/vector.png';
import bgimage from './images/bgimage.png';

const Header = () => {
    return (
        <>
            <div className='header__navigation'>
                <div className='navigation__logo'>
                    GENIUS
                </div>
                <div className='navigation__menu'>
                    <Link className='navigation__menuref' to="/"> PREISE </Link>
                    <Link className='navigation__menuref' to="/"> REFERENZEN </Link>
                    <Link className='navigation__menuref' to="/"> KONTAKT </Link>
                </div>
                <div className='navigation__line'></div>
                <div className='navigation__lang'>
                    <span className='lang__text'>EN</span>
                    <img src={vector}  alt='arrow down' />
                </div>
                
            </div>
            <div className='header__bg'>
                <img src={bgimage} alt='bgimage' />
            </div>
        </>
    )
}

export {Header}
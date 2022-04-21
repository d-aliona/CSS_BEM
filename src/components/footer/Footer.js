import React from 'react';

import {Link} from 'react-router-dom';

import adress1 from './images/map1.png';
import adress2 from './images/map2.png';
import mail1 from './images/email1.png';
import mail2 from './images/email2.png';
import phone from './images/phone.png';

const Footer = () => {
    return (
        <>
            <div className='footer__wrap'>
                <div className='footer__menu'>
                    <Link className='footer__menuref' to="/"> PREISE </Link>
                    <Link className='footer__menuref' to="/"> REFERENZEN </Link>
                    <Link className='footer__menuref' to="/"> KONTAKT </Link>
                </div>
                <div className='footer__container'>
                    <div className='footer__contact'>
                        <div className='footer__contact--mask'>
                            <div className='contact__list'>
                                <div className='contact__adress'>
                                    <div >
                                        <img src={adress1} alt='adress1' />
                                        <img className='adress__img--centre' src={adress2} alt='adress2' />
                                    </div>
                                    <p className='adress__text'>
                                        Poststr, 45, 44890 Hamburg
                                    </p>
                                </div>
                                <div className='contact__mail'>
                                    <div >
                                        <img src={mail1} alt='mail1' />
                                        <img className='mail__img--centre' src={mail2} alt='mail2' />
                                    </div>
                                    <p className='mail__text'>
                                        hello@tratata.de
                                    </p>
                                </div>
                                <div className='contact__phone'>
                                    <div >
                                        <img src={phone} alt='phone' />
                                    </div>
                                    <p className='phone__text'>
                                        040 380-33- 44
                                    </p>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className='footer__form--wrap'>
                        <form className='footer__form'>
                            <h2 className='form__heading'> SCHREIBEN SIE UNS! </h2>
                            <input className='form__input--firma' type="text" name="firma" placeholder="Firma / Organisation" />
                            <input className='form__input--mail' type="text" name="mail" placeholder="E-mail" />
                            <input className='form__input--telefon' type="text" name="telefon" placeholder="Telefon" />
                            <textarea className='form__input--answer' name="answer" placeholder="Was ist ihr anliegen?" rows='4' />
                            <div className='input__submit--wrapper'>
                                <input className='form__input--submit' type="submit" value="SENDEN" />
                            </div>
                        </form>
                    </div>

                </div>
                <div className='footer__copyright'>
                     © 2019  Genius Web Agentur. Alle Rechte vorbehalten
                </div>
            </div>
        </>
    )
}

export {Footer}
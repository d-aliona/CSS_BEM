import React from 'react';

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

const Portfolio = () => {
    return (
        <>
            <div className='portfolio'>
                <div className='portfolio__heading'>
                    <h2 className='heading__heading'> Referenzen</h2>
                    <p className='heading__text'>
                        Von unseren Designern gestaltet, von unseren Entwicklern programmiert, von unserem Team realisiert — in enger Abstimmung mit dem Kunden. Zum Festpreis.
                    </p>
                </div>
                <div className='portfolio__container'>
                    <div className='container__item'>
                        <div className='item__image'> 
                            <img src={image1} alt='portfolio-image1' />
                        </div>
                        <div className='item__text'> 
                            <h3 className='item__textheading'>Webdesign Agentur</h3>
                            <p className='item__textmessage'>
                            Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
                            </p>
                        </div>
                        <div className='item__caption'> Webdesign Agentur </div>
                        
                    </div>
                    <div className='container__item'>
                        <div className='item__image'> 
                            <img src={image2} alt='portfolio-image2' />
                        </div>
                        <div className='item__text'> 
                            <h3 className='item__textheading'>Webdesign Agentur</h3>
                            <p className='item__textmessage'>
                            Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
                            </p>
                        </div>
                        <div className='item__caption'> Webdesign Agentur </div>
                        
                    </div>
                    <div className='container__item'>
                        <div className='item__image'> 
                            <img src={image3} alt='portfolio-image3' />
                        </div>
                        <div className='item__text'> 
                            <h3 className='item__textheading'>Webdesign Agentur</h3>
                            <p className='item__textmessage'>
                            Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
                            </p>
                        </div>
                        <div className='item__caption'> Webdesign Agentur </div>
                        
                    </div>
                    <div className='container__item'>
                        <div className='item__image'> 
                            <img src={image4} alt='portfolio-image4' />
                        </div>
                        <div className='item__text'> 
                            <h3 className='item__textheading'>Webdesign Agentur</h3>
                            <p className='item__textmessage'>
                            Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesign und Online-Marketing an. Seit 2006 kultivieren wir.
                            </p>
                        </div>
                        <div className='item__caption'> Webdesign Agentur </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export {Portfolio}
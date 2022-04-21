import React from 'react';

import note from './images/note.png';
import circle from './images/circle.png';

const Chat = () => {
    return (
        <>
          <div className='chat__wrap'>
            <div className='chat__container'> 
                <img src={note} alt='note' />
                <div className='circles__wrap'>
                    <img src={circle} alt='circle' />
                    <img src={circle} alt='circle' />
                    <img src={circle} alt='circle' />
                </div>
            </div>
          </div>
        </>
    )
}

export {Chat}
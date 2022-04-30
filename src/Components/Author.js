import React from 'react';
import Quotes from './Quotes.json';

const Author = ({index}) => {

    
    return (

        <div className='author'>
        <h3>"{Quotes[index].author}"</h3>
        </div>
    );
};

export default Author;


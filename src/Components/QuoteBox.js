import React, {useState} from 'react';
import Quotes from './Quotes.json';


const colors = ["red", "lightblue", "yellow", "lightgreen", "lightcoral", "gold", "silver", "purple"]


const QuoteBox = () => {

    const randomIndex = Math.floor(Math.random() * Quotes.length)
    const [ index, setIndex ] = useState(randomIndex)

    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random() * Quotes.length);
        setIndex(randomIndex);
    }

    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;
    // document.body.style = `background: red`

    return (

        <>
        <div className="card" style={{color: colors[randomColor]}}>

            <h1><b className='quote'>"</b>{Quotes[index].quote}"</h1>
            <p>"{Quotes[index].author}"</p>
           
        
           <div className="button" >
            <button onClick={changeQuote} style={{color: colors[randomColor]}}>
            <i class="fa-solid fa-rotate"></i>
            </button>
          </div>

        </div>
        </>

    );
};

export default QuoteBox;
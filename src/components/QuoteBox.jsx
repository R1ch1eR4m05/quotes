import React from 'react'



const QuoteBox = ({quotesRandom, colorRandom,clickButton}) => {

const styleButton = {
  backgroundColor: colorRandom
}


  return (
    <article className='card' style = {{color: colorRandom}}>
        <h2 className='card_author'>{quotesRandom.author}</h2>
        <p className='card_quote'>{quotesRandom.quote}</p>
        <button style={styleButton} className='card_btn' onClick={clickButton}>&#62;</button>
    </article>
  )
}

export default QuoteBox
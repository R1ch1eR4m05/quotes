import { useState } from 'react'

import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'

const arrayColors = ['#6C3E63','#85EC4F','#11A363','#A8CFFC','#EB1A5F','#8C0AC3','#A9F2DE']


function App() {
 
  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const getElementRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }



const [quotesRandom, setQuotesRandom] = useState(getElementRandom(quotes))
const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))

const clickButton = () => {
  setQuotesRandom(getElementRandom(quotes))
  setColorRandom(getElementRandom(arrayColors))
}

const appStyle = {
  backgroundColor: colorRandom
}

  return (
    <div className="App" style={appStyle}>
      <QuoteBox 
        quotesRandom={quotesRandom}
        colorRandom={colorRandom}
        clickButton={clickButton}
      />
    </div>
  )
}

export default App

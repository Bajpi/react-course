import { useState } from 'react'
import './App.css'
import usecurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("eur")

  const currencyInfo = usecurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to].toFixed(2))
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div className='w-full h-screen flex flex-wrap  items-center justify-center bg-cover bg-no-repeat' style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg)`}}>
      <div className="w-full">
        <div className='w-full max-w-md mx-auto border border-gray-60 p-5 bg-white/30 backdrop-blur-sm rounded-lg'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className="w-full mb-1 text-black">
              <InputBox
              label = "z"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(value) => setAmount(value)} 
              selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
              onClick={swap}
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 border-2 border-white rounded-md px-2 py-0.5 pb-1 text-white hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
              >↕</button>
            </div>
            <div className="w-full mb-1 text-black">
              <InputBox
              label = "na"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)} 
              selectedCurrency={to}
              amountDisabled
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 border-2 text-white rounded-md px-4 py-3 '
            >Konwertuj {from.toUpperCase()} na {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

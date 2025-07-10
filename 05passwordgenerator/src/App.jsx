import {useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+[]{}|;:',.<>?`~"

    for(let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className='mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-red-400 inset-x-3'>
        <h3 className='text-2xl font-bold mb-2 text-center'>Generator Haseł</h3>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            placeholder='Hasło'
            value={password}
            className='outline-none w-full px-3 py-1 bg-white'
            ref={passwordRef}
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-l-none rounded-r-lg' onClick={copyPassword}>Kopiuj</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={32}
            value={length}
            className='cursor-pointer bg-white'
            onChange={(e) => setLength(e.target.value)} 
            />
            <label htmlFor="length">Długość: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            value={length}
            className='cursor-pointer bg-white'
            onChange={() => setNumberAllowed(prev => !prev)} 
            />
            <label htmlFor="number">Liczby</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            value={length}
            className='cursor-pointer bg-white'
            onChange={() => setCharAllowed(prev => !prev)} 
            />
            <label htmlFor="char">Znaki</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

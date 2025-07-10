import { useState } from 'react'

import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: bgColor }}>
      <div className='fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 justify-center shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='text-white bg-amber-500 px-4 py-1 shadow-lg' onClick={() => setBgColor('#f59e42')}>Orange</button>
          <button className='text-white bg-green-500 px-4 py-1 shadow-lg' onClick={() => setBgColor('#4ade80')}>Green</button>
          <button className='text-white bg-violet-500 px-4 py-1 shadow-lg' onClick={() => setBgColor('#a78bfa')}>Violet</button>
        </div>
      </div>      
    </div>
  )
}

export default App

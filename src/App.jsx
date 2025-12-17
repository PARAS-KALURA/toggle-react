import React, { useState } from 'react'

const App = () => {

  const[color, setColor] = useState(null);

  return (
    <>

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-xl min-h-[80px] p-4 border border-gray-300 rounded-lg shadow-sm flex items-center justify-center">
          <div>
            <h2 className="text-3xl font-bold text-center ">Multi Toggle App</h2>
            <div className='mt-4  flex justify-center gap-3 '  >
              <button className='cursor-pointer px-3 border border-gray-300 rounded-sm transition-transform duration-100 hover:scale-110'><span>Red</span></button>
              <button className='cursor-pointer px-3 border border-gray-300 rounded-sm transition-transform duration-100 hover:scale-110'   ><span>Green</span></button>
              <button className='cursor-pointer px-3 border border-gray-300 rounded-sm  transition-transform duration-100 hover:scale-110 ' ><span>Black</span></button>
              <button className='cursor-pointer  px-3 border border-gray-300 rounded-sm transition-transform duration-100 hover:scale-110 '  ><span>Orange</span></button>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
import React from 'react'

const App = () => {
  return (
    <>

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-xl min-h-[80px] p-4 border border-gray-300 rounded-lg shadow-sm flex items-center justify-center">
          <div>
            <h2 className="text-3xl font-bold text-center ">Multi Toggle App</h2>
            <div className='mt-4  '  >
              <button className='cursor-pointer px-3 border-1 border-gray-300 rounded-sm mr-3'   ><span>Red</span></button>
              <button className='cursor-pointer px-3 border-1 border-gray-300 rounded-sm mr-3 '   ><span>Green</span></button>
              <button className='cursor-pointer px-3 border-1 border-gray-300 rounded-sm mr-3 ' ><span>Black</span></button>
              <button className='cursor-pointer  px-3 border-1 border-gray-300 rounded-sm '  ><span>Orange</span></button>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
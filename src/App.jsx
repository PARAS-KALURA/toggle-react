import React, { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState("light");


  const themes = {
    light: {
      label: "Light",
      bg: "bg-white",
      text: "text-black",
    },

    red: {
      label: "Red",
      bg: "bg-red-500",
      text: "text-white",
    },

    orange: {
      label: "Orange",
      bg: "bg-orange-500",
      text: "text-white",
    },

    black: {
      label: "Black",
      bg: "bg-gray-900",
      text: "text-white",
    },

    green: {
      label: "Green",
      bg: "bg-green-800",
      text: "text-white",
    },

  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-xl min-h-[80px] p-4 border border-gray-300 rounded-lg shadow-sm flex items-center justify-center">
          <div>
            <h2 className="text-3xl font-bold text-center ">Multi Toggle App</h2>
            <div className='mt-4  flex justify-center gap-3 '  >
              {Object.keys(themes).map((key) =>
                <button
                  key={key}
                  className='cursor-pointer px-3 py-1 border border-gray-300 rounded-sm
                 transition-transform duration-100 hover:scale-110'>
                  {themes[key].label}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
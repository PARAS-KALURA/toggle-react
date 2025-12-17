import React, {  useEffect, useState } from "react";

const App = () => {
  // Step 1: state
  const [theme, setTheme] = useState("light");

  // Step 2: theme configuration (data)
  const themes = {
    light: {
      label: "Light",
      bg: "bg-white",
      text: "text-black",
    },
    red: {
      label: "Red",
      bg: "bg-red-900",
      text: "text-black",
    },
    orange: {
      label: "Orange",
      bg: "bg-orange-600",
      text: "text-black",
    },
    black: {
      label: "Black",
      bg: "bg-gray-900",
      text: "text-black",
    },
    green: {
      label: "Green",
      bg: "bg-green-950",
      text: "text-black",
    },
  };

// load item

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  
  if(savedTheme) {
    setTheme(savedTheme);
  }

},[])

  // save

  useEffect(() => {
    localStorage.setItem("theme", theme);
  },[theme]);



  return (
    <div
      className={`min-h-screen flex items-center justify-center
        ${themes[theme].bg} ${themes[theme].text}
        transition-colors duration-300`}
    >
      <div className="w-full max-w-xl min-h-[80px] p-4 border border-gray-300 rounded-lg shadow-sm bg-white/80">
        <h2 className="text-3xl font-bold text-center">
          Multi Toggle App
        </h2>

        <div className="mt-4 flex justify-center gap-3 ">
          {Object.keys(themes).map((key) => {
            const isActive = theme === key;

            return (
              <button
                key={key}
                onClick={() => setTheme(key)}
                className={`px-3 py-1 rounded-sm border
                  transition-all duration-150 cursor-pointer
                  hover:scale-110
                  ${
                    isActive
                      ? "bg-black text-white border-black scale-105"
                      : "bg-transparent border-gray-300"
                  }`}
              >
                {themes[key].label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

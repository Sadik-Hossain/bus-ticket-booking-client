import React, { useState, useEffect } from "react";

// go to tailwind.config and set darkMode:"class" inside module.exports.
// now you can use dark variant like this :
// <App className="dark:bg-slate-900 dark:text-white"/>

const Dark = () => {
  const [darkMode, setDarkMode] = useState(undefined);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);

  return (
    <button onClick={handleDarkMode}>{darkMode ? "light" : "dark"}</button>
  );
};

export default Dark;

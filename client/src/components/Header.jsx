import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <>
      <h1>Womens World Cup</h1>
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        ></button>{" "}
        <p> Dark Mode</p>
      </div>
    </>
  );
};

export default Header;

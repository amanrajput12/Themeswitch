import "./styles.css";
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState(true);
  const [theme, setTheme] = useState("light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    setValue(!value);
  }
  return (
    <div className={`App ${theme} `}>
      <h1>Hello CodeSandbox</h1>
      {
        <button className={`btn${theme} btn`} onClick={handleToggleTheme}>
          {value ? "Light theme " : "Dark Theme"}
        </button>
      }
    </div>
  );
}

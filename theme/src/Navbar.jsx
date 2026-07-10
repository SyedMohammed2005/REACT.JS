import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Navbar</h2>

      <h3>Current Theme : {theme}</h3>

      <h1>
        {theme === "Dark"
          ? "🌙 Dark Mode"
          : "☀️ Light Mode"}
      </h1>

      <button
        onClick={() =>
          setTheme(
            theme === "Dark"
              ? "Light"
              : "Dark"
          )
        }
      >
        Toggle Theme
      </button>

      <hr />
    </div>
  );
}

export default Navbar;
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Home Component</h2>

      <p>Theme is : {theme}</p>

      <hr />
    </div>
  );
}

export default Home;
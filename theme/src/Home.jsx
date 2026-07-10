import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Profile() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Profile Component</h2>

      <p>Current Theme : {theme}</p>
    </div>
  );
}

export default Profile;
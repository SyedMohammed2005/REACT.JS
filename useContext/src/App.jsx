import UserContext from "./UserContext";
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <UserContext.Provider value="Syed">
      <Navbar />
      <Home />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
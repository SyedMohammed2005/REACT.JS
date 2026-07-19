import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
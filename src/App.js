import "./App.css";
import Navbar from "./components/navbar";
import ProductCompare from "./components/ProductCompare";
import ProductDetail from "./components/ProductDetail";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
      <Route
                    path="/"
                    element={<ProductDetail />}
                />
                    <Route
                    path="/product-compare"
                    element={<ProductCompare />}
                />
      </Routes>
    </Router>
  );
}

export default App;

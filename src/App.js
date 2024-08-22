import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import ProductCompare from "./components/ProductCompare";
import ProductDetail from "./components/ProductDetail";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [compareList, setCompareList] = useState([]);
  const [addedProducts, setAddedProducts] = useState([])

  const addToCompare = (product) => {
    if (compareList.length < 4) {
      setCompareList([...compareList, product]);
      setAddedProducts([...addedProducts, product.id]);
    } else {
      alert("You can only compare up to 4 products.");
    }
  };

  const removeFromCompare = (productId) => {
    setCompareList(compareList.filter(product => product.id !== productId));
   setAddedProducts(addedProducts.filter(id => id !== productId));
  };
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
      <Route
                    path="/"
                    element={<ProductDetail addToCompare={addToCompare}
                    addedProducts={addedProducts} />}
                />
                    <Route
                    path="/product-compare"
                    element={<ProductCompare  compareList={compareList}
                    onRemoveProduct={removeFromCompare}  addToCompare={addToCompare} />}
                />
      </Routes>
    </Router>
  );
}

export default App;

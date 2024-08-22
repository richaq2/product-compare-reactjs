import "./App.css";
import { message } from "antd";

import { useState } from "react";
import Navbar from "./components/navbar";
import ProductCompare from "./components/ProductCompare";
import ProductDetail from "./components/ProductDetail";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { error, success, removed } from "./components/ErrorMessage";

function App() {
  const [compareList, setCompareList] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const addToCompare = (product) => {
    if (compareList.length < 4) {
      setCompareList([...compareList, product]);
      setAddedProducts([...addedProducts, product.id]);
      success(messageApi);
    } else {
      error(messageApi);
    }
  };

  const removeFromCompare = (productId) => {
    setCompareList(compareList.filter((product) => product.id !== productId));
    setAddedProducts(addedProducts.filter((id) => id !== productId));
    removed(messageApi);
  };
  return (
    <Router>
      {contextHolder}
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <ProductDetail
              addToCompare={addToCompare}
              addedProducts={addedProducts}
              setAddedProducts={setAddedProducts}
              removeFromCompare={removeFromCompare}
            />
          }
        />
        <Route
          path="/product-compare"
          element={
            <ProductCompare
              compareList={compareList}
              onRemoveProduct={removeFromCompare}
              addToCompare={addToCompare}
              addedProducts={addedProducts}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

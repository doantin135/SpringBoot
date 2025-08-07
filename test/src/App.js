import React, { useState, useEffect } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "./services/productService";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getProducts().then((res) => setProducts(res.data));
  };

  const handleAdd = (product) => {
    if (selectedProduct) {
      updateProduct(selectedProduct.id, product).then(fetchData);
      setSelectedProduct(null);
    } else {
      createProduct(product).then(fetchData);
    }
  };

  const handleDelete = (id) => {
    deleteProduct(id).then(fetchData);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product Management</h2>
      <ProductForm onSubmit={handleAdd} selectedProduct={selectedProduct} />
      <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;

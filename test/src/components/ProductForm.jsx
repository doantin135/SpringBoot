import React, { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, selectedProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setPrice(selectedProduct.price);
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price: parseFloat(price) });
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        className="form-control mb-2"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        className="form-control mb-2"
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary">
        {selectedProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;

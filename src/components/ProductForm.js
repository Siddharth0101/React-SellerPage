import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    productId: "",
    productName: "",
    sellingPrice: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct(newProduct);
    setNewProduct({ productId: "", productName: "", sellingPrice: "" });
  };

  return (
    <form onSubmit={handleAddProduct}>
      <label>
        Product ID:
        <input
          type="text"
          name="productId"
          value={newProduct.productId}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Product Name:
        <input
          type="text"
          name="productName"
          value={newProduct.productName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Selling Price:
        <input
          type="text"
          name="sellingPrice"
          value={newProduct.sellingPrice}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;

import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
    updateTotalAmount(storedProducts);
  }, []);

  const updateTotalAmount = (products) => {
    const total = products.reduce(
      (sum, product) => sum + parseFloat(product.sellingPrice),
      0
    );
    setTotalAmount(total);
  };

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    updateTotalAmount(updatedProducts);
  };

  const handleDeleteProduct = (productId) => {
    const indexToDelete = products.findIndex(
      (product) => product.productId === productId
    );
    if (indexToDelete !== -1) {
      const updatedProducts = [...products];
      updatedProducts.splice(indexToDelete, 1);
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      updateTotalAmount(updatedProducts);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ProductForm addProduct={addProduct} />
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.productId}
            product={product}
            onDelete={() => handleDeleteProduct(product.productId)}
          />
        ))}
      </ul>
      <p>Total Amount Spent: ${totalAmount}</p>
    </div>
  );
};

export default ProductList;

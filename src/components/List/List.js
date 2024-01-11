import React, { useState, useEffect } from "react";

function List(props) {
  const [products, setProducts] = useState(props.formData);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setProducts(props.formData);
  }, [props.formData]);

  useEffect(() => {
    const newTotalAmount = products.reduce(
      (total, product) => total + parseFloat(product.selling_Price),
      0
    );
    setTotalAmount(newTotalAmount);
  }, [products]);

  const handleDelete = (keyList) => {
    const updatedProducts = [...products];
    updatedProducts.splice(keyList, 1);
    setProducts(updatedProducts);
    localStorage.setItem("Data", JSON.stringify(updatedProducts));
  };
  const keyList = products.product_Id;
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, keyList) => (
          <li key={keyList}>
            {`${product.product_Name} - $${product.selling_Price}`}
            <button onClick={() => handleDelete(keyList)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
}

export default List;

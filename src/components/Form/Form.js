import { Fragment, useState } from "react";

function Form(prop) {
  const [productId, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");
  const productIdHandler = (event) => {
    setProductId(event.target.value);
  };
  const sellingPriceHandler = (event) => {
    setSellingPrice(event.target.value);
  };
  const productNameHandler = (event) => {
    setProductName(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      product_Id: productId,
      selling_Price: sellingPrice,
      product_Name: productName,
    };
    prop.onForm(formData);
    setProductId("");
    setSellingPrice("");
    setProductName("");
  };
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <label>Product Id</label>
        <input type="number" onChange={productIdHandler} value={productId} />
        <label>Selling Price</label>
        <input
          type="number"
          onChange={sellingPriceHandler}
          value={sellingPrice}
        />
        <label>Product Name</label>
        <input type="text" onChange={productNameHandler} value={productName} />
        <button>Add Product</button>
      </form>
    </Fragment>
  );
}
export default Form;

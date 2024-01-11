import logo from "./logo.svg";
import "./App.css";
import { Fragment, useEffect } from "react";
import Form from "./components/Form/Form";
import { useState } from "react";
import List from "./components/List/List";

function App() {
  useEffect(() => {
    const loadOnRefresh = JSON.parse(localStorage.getItem("Data")) || [];
    setObjData(loadOnRefresh);
  }, []);

  const [objData, setObjData] = useState([]);

  const formHandler = (productData) => {
    setObjData((prev) => {
      const newData = [...prev, productData];
      localStorage.setItem("Data", JSON.stringify(newData));
      return newData;
    });
  };

  return (
    <Fragment>
      <Form onForm={formHandler} />
      <List formData={objData} />
    </Fragment>
  );
}

export default App;

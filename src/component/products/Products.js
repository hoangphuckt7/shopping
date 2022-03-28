import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function Products(props) {
  const { cat, filters, sort } = props;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://127.0.0.1:5000/api/products?categoty=${cat}`
            : "http://127.0.0.1:5000/api/products/"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: 20,
        justifyContent: "space-between",
      }}
    >
      {cat
        ? filteredProducts.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))
        : products.map((item) => <ProductItem item={item} key={item.id} />)}
    </div>
  );
}

export default Products;

import React, { useEffect, useState } from "react";

import axios from "axios";

import Products from "./Products";
import Pagination from "../Pagination/Pagination";

axios.defaults.baseURL = "https://azahares-leslie-server.herokuapp.com/api/v1";

export default function ProductSection() {
  const [page, setPage] = useState(1);
  const [nextPageExists, setNextPageExists] = useState(false);
  const [previousPpageExists, setPreviousPageExists] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get(
        `/products/public?page=${page}&limit=15`
      );
      setProducts(response.data.results);
      if (response.data.next) {
        setNextPageExists(true);
      } else setNextPageExists(false);
      if (response.data.previous) {
        setPreviousPageExists(true);
      } else setPreviousPageExists(false);
    }

    fetchProducts();
  }, [page]);

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    setPage(page - 1);
  }

  return (
    <>
      <Products products={products} />
      <Pagination
        previousPage={previousPage}
        nextPage={nextPage}
        previousPageExists={previousPpageExists}
        nextPageExists={nextPageExists}
      />
    </>
  );
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  tag: string;
  imageUrl: string;
  enabled: boolean;
  createdAt: Date;
  price: number;
}

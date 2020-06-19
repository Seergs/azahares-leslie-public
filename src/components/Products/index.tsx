import React, { useEffect, useState } from "react";

import axios from "axios";

import Products from "./Products";
import Pagination from "../Pagination/Pagination";

axios.defaults.baseURL = "http://localhost:5000/api/v1";
//axios.defaults.baseURL = "https://azahares-leslie-server.herokuapp.com/api/v1";

export default function ProductSection() {
  const [page, setPage] = useState(1);
  const [nextPageExists, setNextPageExists] = useState(false);
  const [previousPpageExists, setPreviousPageExists] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const endpoint = `/products/public?page=${page}&limit=15&query=${query}`;
      const response = await axios.get(endpoint);
      setProducts(response.data.results);
      if (response.data.next) {
        setNextPageExists(true);
      } else setNextPageExists(false);
      if (response.data.previous) {
        setPreviousPageExists(true);
      } else setPreviousPageExists(false);
    }

    fetchProducts();
  }, [page, query]);

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    setPage(page - 1);
  }

  function updateQuery(query: string) {
    setQuery(query);
  }

  return (
    <>
      <Products products={products} updateQuery={updateQuery} />
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

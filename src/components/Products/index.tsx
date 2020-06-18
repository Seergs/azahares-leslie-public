import React, { useEffect, useState } from "react";

import axios from "axios";

import Products from "./Products";

axios.defaults.baseURL = "https://azahares-leslie-server.herokuapp.com/api/v1";

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("/products/public");
      setProducts(response.data);
    }

    fetchProducts();
  }, []);
  return <Products products={products} />;
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

"use client";

import Container from "@/components/Container";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductInfo from "@/components/ProductInfo";
import { useEffect, useState } from "react";


import dad from "@/assets/Mantis 2.jpg"

const ProductPage = () => {
  const params = useParams();
  const { id } = params;
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const jsonData = await res.json();
        setProductData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const data = productData.find((item) => item.id === parseInt(id));
  // const data = productData.find((item) => item.id === id);

 console.log(data)
  return (
    <div>
      <ProductInfo product={data} />
    </div>
  );
};

export default ProductPage;

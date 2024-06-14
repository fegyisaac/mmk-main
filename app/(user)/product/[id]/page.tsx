"use client";

import Container from "@/components/Container";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductInfo from "@/components/ProductInfo";
import { useEffect, useState } from "react";

import dad from "@/assets/Mantis 2.jpg";

const ProductPage = () => {
  interface Product {
    id: number;
    links: string;
    img: string;
    title: string;
    prevPrice: number;
    price: number;
    brand: string;
    new: boolean;
    rating: number;
    description: string;
  }
  const params = useParams();
  const { id } = params;
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const jsonData: Product[] = await res.json();
        setProductData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const parsedId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);

  const data: Product | undefined = productData.find(
    (item) => item.id === parsedId
  );
  // const data = productData.find((item) => item.id === id);

  console.log(data);
  return (
    <div>
      <ProductInfo product={data} />
    </div>
  );
};

export default ProductPage;

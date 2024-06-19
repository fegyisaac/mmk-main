"use client";

import Container from "@/components/Container";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductInfo from "@/components/ProductInfo";
import { useEffect, useState } from "react";
import { Product } from "@/type";

const ProductPage = () => {

  const params = useParams<{ id: string | string[] }>();
  const { id } = params;
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        // const res = await fetch("/data.json");
        const jsonData: Product[] = await res.json();
        console.log("joson: ", jsonData);
        
        setProductData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const parsedId = Array.isArray(id)
    ? parseInt(id[0], 10)
    : parseInt(id ?? "", 10);

  const data: Product | undefined = productData.find(
    (item: Product) => parseInt(item.id, 10) === parsedId
  );

  return (
    <div>
      <ProductInfo product={data} />
    </div>
  );
};

export default ProductPage;

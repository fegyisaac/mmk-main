"use client";

import Container from "@/components/Container";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductInfo from "@/components/ProductInfo";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const params = useParams();
  const { id } = params;

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/products/");
        const jsonData = await res.json();
        const data = jsonData.find(item => item.id === parseInt(id));
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(productDetails);
  

  return (
    <div>
      <Container className="">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4">
          <div className="h-full xl:col-span-2">
            {/* <Image
              src={""}
              alt="product image"
              className="w-full h-full object-contain"
              width={500}
              height={500}
            /> */}
            hello
          </div>

          <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <ProductInfo />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;

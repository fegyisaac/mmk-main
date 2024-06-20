"use client";

import Image from "next/image";
import React from "react";
import Price from "./Price";
import { addToCart } from "@/Redux/Slices/orebiSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const ProductInfo = ({ product }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[93%] my-10 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between item-center gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4">
        <div className="h-full md:mb-10">
          <Image
            src={product?.img}
            width={600}
            height={600}
            alt="text"
            priority
            className="w-full h-full"
          />
        </div>
        <div className="flex-1">
          <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold">{product?.title}</h2>
              <div className="flex items-center gap-4">
                <p className="text-lg font-normal text-gray-500 line-through">
                  <Price amount={product?.prevPrice} />
                </p>

                <Price amount={product?.price} className="text-lg font-bold" />

                <p className="text-sm">
                  Saved{" "}
                  <Price
                    className="bg-green-700 text-white px-2 rounded-md"
                    amount={product?.prevPrice - product?.price}
                  />
                </p>
              </div>
              <p className="text-sm tracking-wide text-gray-600">
                {product?.description}
              </p>

              <button
                onClick={() => {
                  dispatch(addToCart(product));
                  toast.success(
                    `${product?.title.substring(0, 12)}... added to cart`
                  );
                }}
                className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import Price from "./Price";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/Redux/Slices/orebiSlice";
import { ProductProps } from "@/type";

const CartItem = ({ item }: any) => {
  const dispatch = useDispatch();


  return (
    <div className="w-full grid grid-cols-6 mb-4 border py-2">
      <div className="flex col-span-5 md:col-span-3 items-center gap-5 ml-4">
        <ImCross
          onClick={() => {
            dispatch(deleteProduct(item._id));
            toast.success(
              `${item?.title.substring(0, 12)}... deleted from cart`
            );
          }}
          className="text-primeColor hover:text-red-500 cursor-pointer duration-300"
        />
        <Link href={`/product/${item?._id}`} className="w-[180px]">
          <Image
            src={item?.img}
            alt="product image"
            width={40}
            height={40}
            className="w-full h-full object-contain"
            priority
          />
        </Link>
        <h1 className="font-semibold flex-1">{item?.title.substring(0, 50)}</h1>
      </div>

      <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0">
        <p className="flex w-1/3 items-center text-lg font-semibold">
          <Price amount={item?.price} />
        </p>
        <div className="flex w-1/3 items-center gap-6 text-lg">
          <span
            onClick={() => {
              dispatch(decreaseQuantity({ _id: item?._id }));
              toast.success("Product reduced successfully");
            }}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-500"
          >
            -
          </span>
          <p>{item?.quantity}</p>
          <span
            onClick={() => {
              dispatch(increaseQuantity({ _id: item?._id }));
              toast.success("Product added successfully");
            }}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-500"
          >
            +
          </span>
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          {/* <p>NGN{item.price}</p> */}
          <p>NGN{item.quantity * item.price}</p>
        </div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default CartItem;

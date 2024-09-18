"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useCart from "../(store)/store";
import { formatCurrency } from "@/lib/utils";

export default function ProductCard(props) {
  const { product } = props;
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;

  const setProduct = useCart((state) => state.setProduct);

  const router = useRouter();

  function onProductClick() {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo,
    };
    setProduct({ newProduct });
    // router.push("/product?price_id=" + price_id);
    router.push(`/product/${price_id}`);
  }
  return (
    <div
      onClick={onProductClick}
      className="flex flex-col shadow hover:shadow-lg cursor-pointer"
    >
      <img
        src={productInfo.images[0]}
        alt={name}
        className="w-full h-full object-cover rounded-md hover:opacity-75 hover:saturate-200"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{name}</h3>
          <p className="rounded bg-blue-800 p-2">{formatCurrency(cost)}</p>
        </div>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
}

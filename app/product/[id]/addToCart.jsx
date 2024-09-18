"use client";
import useCart from "../../(store)/store";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AddToCart({ price_id }) {
  const product = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);
  const { cost, productInfo, name, description } = product;
  const router = useRouter();

  useEffect(() => {
    if (!product?.name) {
      router.push("/");
    }
  }, [product, router]);

  if (!product?.name) {
    return null; // Ensure the component returns early if product.name is falsy
  }

  function handleAddToCart() {
    // console.log("PRICE ID: ", price_id);
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost,
    };
    addItemToCart({ newItem });
  }

  return (
    <div className="flex flex-col p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2 md:shadow">
          {/* Ensure productInfo.images[0] exists before accessing */}
          {productInfo?.images?.[0] && (
            <img
              src={productInfo.images[0]}
              alt={name}
              className="w-full h-full object-cover rounded-md hover:opacity-75 hover:saturate-200 cursor-pointer"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex md:flex-col md:items-start text-xl items-center justify-between gap-2">
            <h3 className="md:text-2xl text-1xl lg:text-9l font-bold">
              {name}
            </h3>
            <p className="md:text-base rounded bg-blue-800 p-2">
              {formatCurrency(cost)}
            </p>
          </div>
          <p className="text-sm flex-1 text-slate-400">{description}</p>
          <Button
            onClick={handleAddToCart}
            borderRadius="1.75rem"
            className="self-end bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client"
import { useRouter } from "next/navigation"
import React from "react"
import ReactDom from "react-dom"
import useCart from "../(store)/store"
import { Button } from "@/components/ui/moving-border"
import Divider from "@/components/Divider"
import { IoMdClose } from "react-icons/io"
import { formatCurrency } from "@/lib/utils"

export default function Modal() {
  const closeModal = useCart((state) => state.setOpenModal)
  const cartItems = useCart((state) => state.cart)
  const emptyCart = useCart((state) => state.emptyCart)
  const removeItemFromCart = useCart((state) => state.removeItemFromCart)

  // console.log(cartItems);
  const router = useRouter()

  // async function checkout() {
  //   const lineItems = cartItems.map((cartItem) => {
  //     // console.log("CART ITEM: ", cartItem);
  //     return {
  //       price: cartItem.price_id,
  //       quantity: 1,
  //     }
  //   })

  //   try {
  //     const res = await fetch("/api/checkout/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ lineItems }),
  //     })

  //     const data = await res.json()
  //     // console.log("Checkout data:", data);

  //     if (data.session && data.session.url) {
  //       router.push(data.session.url) // Redirect to Stripe checkout URL
  //     } else {
  //       console.error("Unable to retrieve checkout URL from server:", data)
  //       // Handle error case, e.g., show an error message to the user
  //     }
  //   } catch (error) {
  //     console.error("Error during checkout process:", error)
  //     // Handle error case, e.g., show an error message to the user
  //   }
  // }

  async function checkout() {
    const lineItems = cartItems.map((cartItem) => {
      console.log("CART ITEM: ", cartItem)
      return {
        price: cartItem.price_id,
        quantity: 1,
      }
    })
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    })
    const data = await res.json()
    console.log(data)
    router.push(data.session.url)
  }

  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur-sm  dark:text-white">
      <div onClick={closeModal} className="bg-transparent absolute  inset-0">
        {" "}
      </div>
      <div className="flex flex-col bg-black absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4">
        <div className="flex items-center p-6 justify-between text-xl relative">
          <h1>Cart</h1>
          <IoMdClose
            onClick={closeModal}
            className="fa-solid cursor-pointer hover:opacity-60 fa-xmark"
          />
        </div>
        <Divider />

        <div className="p-4 overflow-auto flex-1 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p className="text-center">Cart is empty</p>
          ) : (
            <>
              {cartItems.map((cartItem, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex border-l border-solid border-slate-700 px-2 flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <h2>{cartItem.name}</h2>
                      <p>{formatCurrency(cartItem.cost)}</p>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Quantity: 1{" "}
                      <span
                        className="ml-5 cursor-pointer"
                        onClick={() => removeItemFromCart({ itemIndex })}
                      >
                        remove item
                      </span>
                    </p>
                  </div>
                )
              })}
            </>
          )}
          {cartItems.length != 0 && (
            <div className="mx-auto my-auto">
              <Button onClick={checkout}>Checkout</Button>
              {cartItems.length > 1 && (
                <div
                  onClick={emptyCart}
                  className="text-center mt-9 cursor-pointer text-slate-500"
                >
                  Empty Cart
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  )
}

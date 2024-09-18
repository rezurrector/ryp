"use client";
import Link from "next/link";
import React from "react";
import useCart from "@/app/(store)/store";
import Modal from "../app/store/Modal";
import { FaCartShopping } from "react-icons/fa6";
import { RiHomeHeartFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { IoStorefront } from "react-icons/io5";

export default function Header() {
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);
  const pathname = usePathname();

  // console.log(pathname);
  // console.log(pathname === "/store");
  // console.log(cartItems);
  return (
    <header className="sticky dark:bg-black dark:text-white bg-black top-0 md:p-4 sm: p-4 border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between">
      {openModal && <Modal />}
      <h1 className="uppercase cursor-pointer hover:scale-110 hover:text-blue-900">
        {/^\/?store\/?$/.test(pathname) ? (
          <Link href={"/"}>
            <RiHomeHeartFill />
          </Link>
        ) : (
          <Link href={"/store"}>
            <IoStorefront />
          </Link>
        )}
      </h1>
      <div
        onClick={setOpenModal}
        className="relative cursor-pointer group grid place-items-center"
      >
        {cartItems.length > 0 && (
          <div className="absolute aspect-square pointer-events-none h-5 sm:h-6 grid place-items-center top-0 bg-blue-400 text-white rounded-full right-0 -translate-y-1/2 translate-x-1/2">
            <p className="text-xs sm:text-sm">{cartItems.length}</p>
          </div>
        )}
        <FaCartShopping className="cursor-pointer hover:text-blue-900" />
      </div>
    </header>
  );
}

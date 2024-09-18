"use client";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <footer className="text-sm text-slate-500 text-center p-5 flex flex-row justify-center dark:bg-black z-50">
      <Link
        target="_blank"
        href="https://www.instagram.com/rockyoupierecords/"
        className="mx-1"
      >
        <FaInstagram size={20} className="" />
      </Link>
      <span>
        RockYouPie Records © 2024 | All Rights Reserved Contact:
        <a href="mailto:angel.marquez@gmail.com" className="ml-1">
          angel.marquez@gmail.com
        </a>
      </span>
    </footer>
  );
}

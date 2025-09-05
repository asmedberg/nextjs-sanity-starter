"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import style from "./nav-items.module.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItem {
  _id: string;
  title: string;
  url: string;
}

const NavItems = ({ items }: { items: NavItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  // Close the nav menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 608) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.container}>
      <button onClick={openNav} className={`${style.btn} ${style.btn_open}`}>
        <Bars3Icon className={style.btn_icon} />
      </button>
      <div className={`${style.nav_items} ${isOpen ? style.open : ""}`.trim()}>
        <button onClick={closeNav} className={`${style.btn} ${style.btn_close}`}>
          <XMarkIcon className={style.btn_icon} />
        </button>
        <Link href="/" title="Home" className={style.nav_link}>
          Home
        </Link>
        {items?.map((item: NavItem) => (
          <Link key={item._id} href={`/${item.url}`} className={style.nav_link}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavItems;

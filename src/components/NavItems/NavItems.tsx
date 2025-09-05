"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  // Close the nav menu on resize or escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 608) {
        closeNav();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        closeNav();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // close nav menu on route change
  useEffect(() => {
    closeNav();
  }, [pathname]);

  return (
    <div className={style.container}>
      <button
        onClick={openNav}
        className={`${style.btn} ${style.btn_open}`}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="nav-menu"
        type="button"
      >
        <Bars3Icon className={style.btn_icon} aria-hidden="true" />
      </button>
      <div
        role="navigation"
        aria-label="Main navigation"
        className={`${style.nav_items} ${isOpen ? style.open : ""}`.trim()}
      >
        <button onClick={closeNav} className={`${style.btn} ${style.btn_close}`} aria-label="Close menu" type="button">
          <XMarkIcon className={style.btn_icon} aria-hidden="true" />
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

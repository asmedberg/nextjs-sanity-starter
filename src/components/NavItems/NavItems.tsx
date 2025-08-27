import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { NAV_QUERY } from "@/sanity/lib/queries";
import style from "./nav-items.module.css";

type NavItem = {
  _id: string;
  title: string;
  url: string;
};

const NavItems = async () => {
  const navItems = await client.fetch(NAV_QUERY);

  return (
    <>
      <Link href="/" title="Home" className={style.nav_link}>
        Home
      </Link>
      {navItems?.map((item: NavItem) => (
        <Link key={item._id} href={`/${item.url}`} className={style.nav_link}>
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default NavItems;

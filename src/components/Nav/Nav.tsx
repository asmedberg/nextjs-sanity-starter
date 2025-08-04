import { client } from "@/sanity/lib/client";
import { NAV_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import style from "./nav.module.css";

const Nav = async () => {
  const nav = await client.fetch(NAV_QUERY);

  return (
    <nav className={style.main_nav}>
      <Link href="/" title="Home">
        Home
      </Link>
      {nav?.navItems?.map(item => (
        <Link key={item._id} href={`/${item.url}`}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

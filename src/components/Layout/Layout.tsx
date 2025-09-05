import { client } from "@/sanity/lib/client";
import NavItems from "../NavItems";
import style from "./layout.module.css";
import { NAV_QUERY } from "@/sanity/lib/queries";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const navItems = await client.fetch(NAV_QUERY);

  return (
    <div className={style.layout}>
      <header className={style.header}>
        <h1>Adam Smedberg</h1>
      </header>
      <nav className={style.nav}>
        <NavItems items={navItems} />
      </nav>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>&copy; {new Date().getFullYear()} Adam Smedberg</footer>
    </div>
  );
};

export default Layout;

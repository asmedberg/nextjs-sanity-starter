import NavItems from "../NavItems/NavItems";
import style from "./layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.layout}>
      <header className={style.header}>
        <h1>Adam Smedberg</h1>
      </header>
      <nav className={style.nav}>
        <NavItems />
      </nav>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>&copy; {new Date().getFullYear()} Adam Smedberg</footer>
    </div>
  );
};

export default Layout;

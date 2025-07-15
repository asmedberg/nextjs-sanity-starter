import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to the Next.js Sanity Starter</h1>
        <p>This is a starter template for building a Next.js application with Sanity.io as the headless CMS.</p>
      </main>
    </div>
  );
}

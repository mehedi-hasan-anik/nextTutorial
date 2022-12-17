import { Inter } from "@next/font/google";
import Link from "next/Link";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Home</h1>
      <Link href="/blog">blog</Link>
      <Link href="/product">product</Link>
    </div>
  );
}

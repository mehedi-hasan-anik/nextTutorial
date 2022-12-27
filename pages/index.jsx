import { Inter } from "@next/font/google";
import Link from "next/Link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("router", router);
    router.push("/product");
  };
  return (
    <div className={styles.main}>
      <h1>Home</h1>
      <Link href="/blog">blog</Link>
      <Link href="/product">product</Link>
      <button onClick={handleClick}>place Order</button>
      <Link href="/posts">posts</Link>
    </div>
  );
}

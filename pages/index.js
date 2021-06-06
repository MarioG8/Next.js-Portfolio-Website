import Link from "next/link";
import Head from "next/head";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.home}>
        <h3 className="md-heading">Portfolio Page</h3>
        <h1 className="lg-heading">
          Mariusz
          <span className={styles.textSecondary}> Golik</span>
        </h1>
        <h2 className="sm-heading">Web Developer, Programmer, Designer.</h2>
        <div className={styles.icons}>
          <Link href="https://github.com">
            <FaGithub size={35} className={styles.icon} />
          </Link>
          <Link href="https://www.linkedin.com">
            <FaLinkedin size={35} className={styles.icon} />
          </Link>
          <Link href="https://twitter.com">
            <FaTwitter size={35} className={styles.icon} />
          </Link>
        </div>
      </main>
    </>
  );
}

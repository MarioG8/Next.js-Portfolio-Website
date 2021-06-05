import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <h1 className="lg-heading">
        Mariusz
        <span className={styles.textSecondary}> Golik</span>
      </h1>
      <h2 className="sm-heading">Web Developer, Programmer, Designer.</h2>
      <div className={styles.icons}>
        <Link href="https://github.com">
          <FaGithub size={42} className={styles.icon} />
        </Link>
        <Link href="https://www.linkedin.com">
          <FaLinkedin size={42} className={styles.icon} />
        </Link>
        <Link href="https://twitter.com">
          <FaTwitter size={42} className={styles.icon} />
        </Link>
      </div>
    </main>
  );
}

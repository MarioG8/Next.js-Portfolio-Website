import styles from "@/styles/Home.module.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import Link from "next/link";

function Header() {
  return (
    <main className={styles.home}>
      <h3 className={styles.mdHeading}>Portfolio Page</h3>
      <h1 className="lg-heading">
        Mariusz
        <span className={styles.textSecondary}> Golik</span>
      </h1>
      <h2 className="sm-heading">Web Developer, Programmer, Designer.</h2>
      <div className={styles.icons}>
        <Link href="https://github.com">
          <a target="_blank">
            <FaGithub size={35} className={styles.icon} />
          </a>
        </Link>
        <Link href="mailto:golikmariusz@yahoo.com">
          <a>
            <GiMailbox size={35} className={styles.icon} />
          </a>
        </Link>
        <Link href="https://twitter.com">
          <a target="_blank">
            <FaTwitter size={35} className={styles.icon} />
          </a>
        </Link>
      </div>
    </main>
  );
}

export default Header;

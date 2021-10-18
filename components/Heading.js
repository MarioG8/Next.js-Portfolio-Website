import styles from "@/styles/Heading.module.css";
import { FaGithub, FaDev, FaStackOverflow } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import Link from "next/link";

function Header() {
  return (
    <main className={styles.header}>
      <h1 className="lg-heading">
        Mariusz
        <span className={styles.textSecondary}> Golik</span>
      </h1>
      <h2 className="sm-heading">
        Web Developer, Designer, Self-Taught Programmer
      </h2>
      <div className={styles.icons}>
        <Link href="https://dev.to/mariog8">
          <a target="_blank" rel="noreferrer">
            <FaDev className={styles.icon} />
          </a>
        </Link>
        <Link href="https://github.com/MarioG8">
          <a target="_blank" rel="noreferrer">
            <FaGithub className={styles.icon} />
          </a>
        </Link>
        <Link href="https://stackoverflow.com/users/13705979/mariog8">
          <a target="_blank" rel="noreferrer">
            <FaStackOverflow className={styles.icon} />
          </a>
        </Link>
        <Link href="mailto:golikmariusz@yahoo.com">
          <a>
            <GiMailbox className={styles.icon} />
          </a>
        </Link>
      </div>
    </main>
  );
}

export default Header;

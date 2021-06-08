import styles from "@/styles/Home.module.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import { IoCodeSlashOutline } from "react-icons/io5";
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
            <FaGithub size={33} className={styles.icon} />
          </a>
        </Link>
        <Link href="mailto:golikmariusz@yahoo.com">
          <a>
            <GiMailbox size={33} className={styles.icon} />
          </a>
        </Link>
        <Link href="https://forum.pasja-informatyki.pl/user/MarioG8">
          <a target="_blank">
            <IoCodeSlashOutline size={33} className={styles.icon} />
          </a>
        </Link>
      </div>
    </main>
  );
}

export default Header;

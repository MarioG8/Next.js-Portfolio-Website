import styles from "@/styles/404.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <section className={styles.notFound}>
      <div className={styles.bgWrap}>
        <Image
          alt="Code on the Laptop"
          src="/images/code_011.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.bgImg}
        />
      </div>
      <div className={styles.bgText}>
        <h2>
          <BiErrorCircle className={styles.bgIcon} />
          404
        </h2>
        <h4>page not found !</h4>
        <Link href="/">
          <a className={styles.bgLink}>
            <FaHome className={styles.bgIcon} />
            home page
          </a>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;

import styles from "@/styles/404.module.css";
import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          alt="Code on the Laptop"
          src="/images/code_011.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <p className={styles.bgText}>
        404 page Not Found!
        <br />
        <Link href="/">
          <a className={styles.bgLink}>go back home</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;

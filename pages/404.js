import styles from "@/styles/404.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";
import { GoHome } from "react-icons/go";

function NotFound() {
  return (
    <>
      <Head>
        <title>404 Page Not Found!</title>
        <meta name="description" content="Page Not Found!" />
      </Head>
      <div className={styles.bgWrap}>
        <Image
          alt="Sepia, Code on the laptop computer"
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
            <GoHome className={styles.bgIcon} />
            home page
          </a>
        </Link>
      </div>
    </>
  );
}

export default NotFound;

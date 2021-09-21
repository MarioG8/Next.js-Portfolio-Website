import styles from "@/styles/404.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { RiHomeWifiLine } from "react-icons/ri";

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

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
            <RiHomeWifiLine className={styles.bgIcon} />
            go back
          </a>
        </Link>
      </div>
    </>
  );
}

export default NotFound;

import Header from "./Header";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

function Layout(props) {
  return (
    <>
      <Header />
      <Image
        alt="code"
        src="/images/background.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.image}
      />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;

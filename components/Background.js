import Image from "next/image";
import styles from "@/styles/Background.module.css";

function Background() {
  return (
    <div className={styles.container}>
      <Image
        alt="code on monitor"
        src="/images/background.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center top"
        quality={100}
        className={styles.image}
      />
    </div>
  );
}

export default Background;

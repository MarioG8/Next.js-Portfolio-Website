import Image from "next/image";
import styles from "@/styles/Background.module.css";

function Background() {
  return (
    <div className={styles.container}>
      <Image
        alt="code on monitor"
        src="/images/code_003.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        quality={100}
        className={styles.image}
      />
    </div>
  );
}

export default Background;

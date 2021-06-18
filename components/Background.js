import Image from "next/image";
import styles from "@/styles/Background.module.css";

function Background() {
  return (
    <div className={styles.container}>
      <Image
        alt="Code on the laptop computer, red keyboard backlight"
        src="/images/code_011.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 79%"
        quality={100}
        className={styles.image}
      />
    </div>
  );
}

export default Background;

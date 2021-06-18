import styles from "@/styles/Showcase.module.css";
import Image from "next/image";

function Showcase({ image, position }) {
  return (
    <div className={styles.showcase}>
      <Image
        src={image}
        objectPosition={position}
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.showcase_img}
      />
    </div>
  );
}

export default Showcase;

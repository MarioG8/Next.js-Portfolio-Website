import styles from "@/styles/Showcase.module.css";
import Image from "next/image";

function Showcase(props) {
  return (
    <div className={styles.showcase}>
      <Image
        src={props.image}
        objectPosition={props.position}
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.showcase_img}
        alt="Colorful JavaScript code on the monitor screen"
      />
    </div>
  );
}

export default Showcase;

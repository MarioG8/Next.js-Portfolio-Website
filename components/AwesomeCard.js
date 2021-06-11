import styles from "@/styles/AwesomeCard.module.css";
import Image from "next/image";
import Link from "next/link";

function AwesomeCard(props) {
  return (
    <div className={styles.about_card}>
      <Image
        src={props.img}
        objectFit="cover"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.about_img}
      />
      <div className={styles.about_card_content}>
        <h2 className={styles.about_card_title}>{props.title}</h2>
        <p className={styles.about_card_body}>{props.description}</p>
        <a href="#" className={styles.about_button}>
          {props.btnDesc}
        </a>
      </div>
    </div>
  );
}

export default AwesomeCard;

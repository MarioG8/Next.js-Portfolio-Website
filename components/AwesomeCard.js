import styles from "@/styles/AwesomeCard.module.css";
import Image from "next/image";

function AwesomeCard(props) {
  return (
    <div className={styles.about_card}>
      <Image
        src={props.img}
        objectFit="cover"
        layout="fill"
        quality={100}
        className={styles.about_img}
        alt="Programming languages, frameworks and technologies, Python"
      />
      <div className={styles.about_card_content}>
        <h2 className={styles.about_card_title}>{props.title}</h2>
        <p className={styles.about_card_body}>{props.description}</p>
        <a href={props.link} target="_blank" className={styles.about_button}>
          Read more
        </a>
      </div>
    </div>
  );
}

export default AwesomeCard;

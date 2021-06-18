import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Card.module.css";
import { FaGithub } from "react-icons/fa";

function Card(props) {
  return (
    <div className={styles.card}>
      <Image
        src={props.img}
        alt="images"
        height={400}
        width={630}
        className={styles.card_img}
        alt="Surfer on a wave, thunderstorm, ancient library, code on the laptop screen"
      />

      <div className={styles.card_category}>
        <span className={styles.date}>{props.date}</span>
        {props.lang}
      </div>

      <div className={styles.card_title}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>

      <div className={styles.card_links_container}>
        <Link href={props.link}>
          <a target="_blank">Visit Site</a>
        </Link>
        <div className={styles.card_items}>
          <p>Code &gt;</p>
          <Link href={props.git}>
            <a target="_blank">
              <FaGithub size={35} className={styles.card_icon} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;

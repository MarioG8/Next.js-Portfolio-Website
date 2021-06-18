import styles from "@/styles/AwesomeCard.module.css";
import Image from "next/image";
import Link from "next/link";

function BootCampCard(props) {
  return (
    <div className={styles.about_card}>
      <Image
        src={props.img}
        objectFit="cover"
        layout="fill"
        quality={100}
        className={styles.about_img}
        alt="Code on computer monitor.Tablet, smartphone with headphones, keyboard and cup of coffee"
      />
      <div className={styles.about_card_content}>
        <h2 className={styles.about_card_title}>{props.title}</h2>
        <p className={styles.about_card_body}>{props.description}</p>
        <Link href="/bootcamps">
          <a className={styles.about_button}>Read more</a>
        </Link>
      </div>
    </div>
  );
}

export default BootCampCard;

import styles from "@/styles/Card.module.css";
import Image from "next/image";

function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.img} className={styles.card__img} alt="card__title" />
      <div className={styles.card__body}>
        <h2 className={styles.card__title}>{props.title}</h2>
        <p className={styles.card__description}>{props.description}</p>
        <h3 className={styles.card_number}>{props.number}</h3>
        <button className={styles.card__btn}>Contact me</button>
      </div>
    </div>
  );
}

export default Card;

import Image from "next/image";
import styles from "@/styles/Item.module.css";

function Item(props) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={props.img}
          width={350}
          height={200}
          alt="Public phone, red mailbox, old town of the historic city, miniature logos of the languages of the programming environment and frameworks "
        />
      </div>
      <div className={styles.info}>
        <h4>{props.subtitle}</h4>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.link}>
        <div>
          <a className={styles.icon} href={props.link} target="_blank">
            {props.icon}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Item;

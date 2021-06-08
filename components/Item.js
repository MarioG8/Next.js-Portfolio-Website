import Image from "next/image";
// import Link from "next/link";
import styles from "@/styles/Item.module.css";

function Item(props) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image src={props.img} width={350} height={200} />
      </div>
      <div className={styles.info}>
        {props.subtitle}
        <h3>{props.title}</h3>
      </div>
      <div className={styles.link}>
        <div div className={styles.icon}>
          {props.icon}
        </div>
      </div>
    </div>
  );
}

export default Item;

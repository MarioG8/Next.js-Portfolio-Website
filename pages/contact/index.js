import Showcase from "@/components/Showcase";
// import ShowcaseSec from "@/components/ShowcaseSec";
import styles from "@/styles/Contact.module.css";
import Head from "next/head";
import FormContact from "@/components/FormContact";
import Image from "next/image";
import Link from "next/link";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <Showcase />
      {/* <ShowcaseSec /> */}
      <main className={styles.contact}>
        <div className={styles.contact_container}>
          <div className={styles.event}>
            <div className={styles.img}>
              <Image
                src="/images/projects/project_000.png"
                width={350}
                height={200}
              />
            </div>

            <div className={styles.info}>
              Mariusz Golik
              <h3>Name</h3>
            </div>

            <div className={styles.link}>
              <Link href="#">
                <a className="btn">Details</a>
              </Link>
            </div>
          </div>
          <div className={styles.event}>
            <div className={styles.img}>
              <Image
                src="/images/projects/project_000.png"
                width={350}
                height={200}
              />
            </div>

            <div className={styles.info}>
              Mariusz Golik
              <h3>Name</h3>
            </div>

            <div className={styles.link}>
              <Link href="#">
                <a className="btn">Details</a>
              </Link>
            </div>
          </div>
          <div className={styles.event}>
            <div className={styles.img}>
              <Image
                src="/images/projects/project_000.png"
                width={350}
                height={200}
              />
            </div>

            <div className={styles.info}>
              Mariusz Golik
              <h3>Name</h3>
            </div>

            <div className={styles.link}>
              <Link href="#">
                <a className="btn">Details</a>
              </Link>
            </div>
          </div>
          <div className={styles.event}>
            <div className={styles.img}>
              <Image
                src="/images/projects/project_000.png"
                width={350}
                height={200}
              />
            </div>

            <div className={styles.info}>
              Mariusz Golik
              <h3>Name</h3>
            </div>

            <div className={styles.link}>
              <Link href="#">
                <a className="btn">Details</a>
              </Link>
            </div>
          </div>
        </div>
        <FormContact />
      </main>
    </>
  );
}

export default ContactPage;

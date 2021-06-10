import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import ShowcaseSec from "@/components/ShowcaseSec";

function AboutPage() {
  return (
    <>
      <Head>
        <title>Dossier</title>
        <meta name="description" content="History of my passion" />
      </Head>

      <ShowcaseSec />
      <section className={styles.about}>
        <div className={styles.about_container}>
          <div className={styles.about_txt_wrapper}>
            <h2>about me</h2>
            <p>
              <strong>Stoicism </strong>is a school of Hellenistic philosophy
              founded by Zeno of Citium in Athens in the early 3rd century BC.
              It is a philosophy of personal ethics informed by its system of
              logic and its views on the natural world. According to its
              teachings, as social beings, the path to eudaimonia (happiness, or
              blessedness) is found in accepting the moment as it presents
              itself, by not allowing oneself to be controlled by the desire for
              pleasure or by the fear of pain, by using one's mind to understand
              the world and to do one's part in nature's plan, and by working
              together and treating others fairly and justly.
            </p>
            <p>
              <strong>The Stoics </strong>are especially known for teaching that
              "virtue is the only good" for human beings, and those external
              things—such as health, wealth, and pleasure—are not good or bad in
              themselves (adiaphora), but have value as "material for virtue to
              act upon." Alongside Aristotelian ethics, the Stoic tradition
              forms one of the major founding approaches to virtue ethics.The
              Stoics also held that certain destructive emotions resulted from
              errors of judgment, and they believed people should aim to
              maintain a will (called prohairesis) that is "in accordance with
              nature."
            </p>
          </div>
          <div className={styles.about_img_wrapper}>
            <Image
              src="/images/mario_004.jpg"
              width={350}
              height={500}
              quality={100}
              className={styles.about_image}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;

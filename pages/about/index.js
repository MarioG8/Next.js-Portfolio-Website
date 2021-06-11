import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import ShowcaseSec from "@/components/ShowcaseSec";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoCodeSlashOutline } from "react-icons/io5";
import ShowcaseThr from "@/components/ShowcaseThr";
import AwesomeCard from "@/components/AwesomeCard";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="description" content="History of my passion" />
      </Head>

      <ShowcaseThr />
      <section className={styles.about}>
        <div className={styles.about_container}>
          <div className={styles.about_txt_wrapper}>
            <h1>about me</h1>
            <h3>
              I'm self-taught programmer, designer and Web developer from
              Cracow,Poland.
            </h3>
            <p>
              <strong>Stoicism </strong>is a school of Hellenistic philosophy
              founded by Zeno of Citium in Athens in the early 3rd century BC.
              It is a philosophy of personal ethics informed by its system of
              logic and its views on the natural world. According to its
              teachings, as social beings, the path to eudaimonia (happiness, or
              blessedness) is found in accepting the moment as it presents
              itself
            </p>
            <p>
              <strong>The Stoics </strong>are especially known for teaching that
              "virtue is the only good" for human beings, and those external
              things—such as health, wealth, and pleasure—are not good or bad in
              themselves (adiaphora), but have value as "material for virtue to
              act upon." Alongside Aristotelian ethics, the Stoic tradition
              forms one of the major founding approaches to virtue ethics.The
              Stoics also held that certain destructive emotions resulted from
              errors of judgment
            </p>
            <div className={styles.icons}>
              <Link href="mailto:golikmariusz@yahoo.com">
                <a>
                  <GrMail size={36} className={styles.icon} />
                </a>
              </Link>
              <Link href="https://forum.pasja-informatyki.pl/user/MarioG8">
                <a target="_blank">
                  <IoCodeSlashOutline size={36} className={styles.icon} />
                </a>
              </Link>
              <Link href="https://github.com">
                <a target="_blank">
                  <FaGithub size={36} className={styles.icon} />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.about_img_wrapper}>
            <Image
              src="/images/mario_004.jpg"
              alt="mario"
              height={650}
              width={475}
              objectFit="cover"
              className={styles.about_image}
            />
          </div>
        </div>
        <div className={styles.about_header_two}>
          <h1>skills & bootcamps</h1>
        </div>
        <div className={styles.about_tech_wrapper}>
          <AwesomeCard
            img="/images/html_001.png"
            title="Fundamentals"
            description="Lorem, ipsum dolor sit "
          />
          <AwesomeCard
            img="/images/js.png"
            title="JavaScript"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae delectus velit explicabo excepturi odit !"
          />
          <AwesomeCard
            img="/images/python_003.jpg"
            title="Python"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae "
          />
          <AwesomeCard
            img="/images/bootcamp5.jpg"
            title="Bootcamps"
            description=" nulla tempore nesciunt!"
          />
        </div>
      </section>
    </>
  );
}

export default AboutPage;

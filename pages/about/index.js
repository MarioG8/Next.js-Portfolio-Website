import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoCodeSlashOutline } from "react-icons/io5";
import AwesomeCard from "@/components/AwesomeCard";
import BootCampCard from "@/components/BootcampCard";
import Showcase from "@/components/Showcase";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="description" content="About me page" />
      </Head>
      <Showcase image="/images/code_007.jpg" position="top" />
      <section className={styles.about}>
        <div className={styles.about_container}>
          <div className={styles.about_txt_wrapper}>
            <h1>about me..</h1>
            <h3>
              I'm self-taught programmer, designer and web developer from
              Cracow, Poland.
            </h3>
            <p>
              <strong className={styles.strong}>Programming</strong> is one of
              my biggest passion. My adventure related to IT started in my first
              job. I was involved in software and hardware in the mobile phone
              industry for over two years. It was also where I first encountered
              web development. However, my professional career suddenly changed
              direction to finances.
            </p>
            <p>
              <strong className={styles.strong}>From </strong>January 2020, I
              decided to return to IT. My goal is to connect with my passion
              professionally. I am an ambitious, self-taught programmer who
              loves to learn. I draw my knowledge from traditional sources such
              as books, as well as from more modern source like bootcamps,
              tutorials, online course and internet forums for coders.
            </p>
            <p>
              <strong className={styles.strong}>After</strong> gaining
              foundation of knowledge about web development(Html, Css, Js), my
              learning focused on Python. Basics of Python, Object oriented
              programming as well as the basics of Data Science, the Pygame
              library and the Django framework.
            </p>
            <p>
              <strong className={styles.strong}>Presently</strong> my favorite
              programming language is JavaScript. Both from the front-end Js and
              frameworks like(React.js Next.js Gatsby.js) and the server side
              (Node.js - environment). My stronger side is currently the
              front-end, but I am doing my best to balance my knowledge and I am
              also focusing on learning the back-end (Node.js - environment)
            </p>
            <p>
              <strong className={styles.strong}>My</strong> dream and goal, in
              the near future is to create useful web and mobile applications,
              based on JavaScript language (Next.js, React.js, React Native) as
              well as expand my knowledge, experience, towards the full stack
              JavaScript developer.
            </p>
            <div className={styles.icons}>
              <Link href="mailto:golikmariusz@yahoo.com">
                <a>
                  <GrMail className={styles.icon} />
                </a>
              </Link>
              <Link href="https://forum.pasja-informatyki.pl/user/MarioG8">
                <a target="_blank">
                  <IoCodeSlashOutline className={styles.icon} />
                </a>
              </Link>
              <Link href="https://github.com">
                <a target="_blank">
                  <FaGithub className={styles.icon} />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.about_img_wrapper}>
            <Image
              src="/images/mario_001.jpg"
              alt="Awesome handsome blond man in sunglasses. In the background a reed "
              height={680}
              width={475}
              objectFit="cover"
              quality={100}
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
            description="Hmtl 5 and CSS3, Sass/Scss, Bootstrap and Tailwind, Adobe XD, Git, Github, devtools(firefox, chrome)"
            link="https://developer.mozilla.org/en-US/docs/Learn"
          />
          <AwesomeCard
            img="/images/js.png"
            title="JavaScript"
            description="Vanilla JavaScript, Node.js & Express, mongoDB, React.js, Gatsby.js, Next.js"
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <AwesomeCard
            img="/images/python_003.jpg"
            title="Python"
            description="Python, Django, Pandas, Matplotlib, NumPy, Seaborn,"
            link="https://www.python.org/"
          />
          <BootCampCard
            img="/images/bootcamp5.jpg"
            title="Bootcamps"
            description="Python(Pandas), JavaScript, Node.js, React.js, Next.js"
          />
        </div>
      </section>
    </>
  );
}

export default AboutPage;

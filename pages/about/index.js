import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoCodeSlashOutline } from "react-icons/io5";
import ShowcaseThr from "@/components/ShowcaseThr";
import AwesomeCard from "@/components/AwesomeCard";
import BootCampCard from "@/components/BootcampCard";

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
              <strong>Programming</strong> is my biggest passion.My adventure
              related to IT started in my first job. I was involved in software
              and hardware in the mobile phone industry for over two years. It
              was also where I first encountered web programming. However, my
              professional career changed direction to finance. From January
              2020, I decided to return to IT. My goal is to connect with my
              passion professionally. I am an ambitious, self-taught programmer
              who loves to learn. I draw my knowledge from traditional sources
              such as books, as well as from modern source like bootcamps,
              tutorials, and internet forums.
            </p>
            <p>
              <strong>After learning</strong> the foundations of web programming
              (Html, Css, Js), my learning focused on Python. Basics of Python
              and object oriented programming as well as the basics of Data
              Science and the Pygame library and the Django framework. Currently
              my favorite programming language is JavaScript. Both from the
              front-end (React.js Next.js Gatsby.js) and the server (Node.js)
              side. My strongest side is currently the front-end, but I am doing
              my best to balance my knowledge and I am also focusing on learning
              the back-end ( Node.js)My dream and goal is to create web and
              mobile applications based on JavaScript language (react.js,
              next.js - react-native)
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
            description="Hmtl 5 and CSS3, Sass/Scss, Bootstrap and Tailwind, Adobe XD, Git, Github, devtools."
            link="https://developer.mozilla.org/en-US/docs/Learn"
          />
          <AwesomeCard
            img="/images/js.png"
            title="JavaScript"
            description="Vanilla JavaScript, Node.js & Express & mongoDB, React.js, Gatsby.js, Next.js."
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <AwesomeCard
            img="/images/python_003.jpg"
            title="Python"
            description="Python, Django, NumPy, Matplotlib, Seaborn, Pandas."
            link="https://www.python.org/"
          />
          <BootCampCard
            img="/images/bootcamp5.jpg"
            title="Bootcamps"
            description="JavaScript, Node.js, React.js, Next.js"
          />
        </div>
      </section>
    </>
  );
}

export default AboutPage;

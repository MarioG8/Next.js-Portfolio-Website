import Head from "next/head";
import styles from "@/styles/Projects.module.css";
import Card from "@/components/Card";
import Showcase from "@/components/Showcase";

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Couple of my projects" />
      </Head>
      <Showcase image="/images/code_007.jpg" position="center" />
      <div className={styles.projects}>
        <h2>my projects..</h2>
      </div>
      <main className={styles.projects_container}>
        <Card
          img="/images/thunder.jpg"
          date="25 Oct 2020"
          lang="Html,CSS,JS"
          title="Surfing School Website"
          description="Simple JavaScript weather app built with  Html, Css, and Vanilla JavaScript, external Api from openweathermap.org
          Daily weather(cloudiness, temp) around the world, for the city selected by the user."
          link="https://weather-application-mario.netlify.app/"
          git="https://github.com/MarioG8?tab=repositories"
        />
        <Card
          img="/images/killerwhale.jpg"
          date="5 Jan 2021"
          lang="Html,CSS,JS"
          title="Surfing School Website"
          description="Full responsive Single Page Website, built with Html,   Sass, Vanilla JavaScript, GSAP animation, custom animated icons and contact form. A Business page about water sports. Windsurfing and Surfing school."
          link="https://killerwhale.netlify.app/"
          git="https://github.com/MarioG8?tab=repositories"
        />
        <Card
          img="/images/stoa.jpg"
          date="5 May 2021"
          lang="React.js,Scss"
          title="Stoa React Website"
          description="Full Responsive React website built with React.js and Sass, React icons, scroll, and React router. Website devoted to stoic philosophy.
          Golden thoughts of the main heros(Epictetus, Seneca, M.Aurelius)"
          link="https://stoa-app.netlify.app/"
          git="https://github.com/MarioG8?tab=repositories"
        />
        <Card
          img="/images/code_011.jpg"
          date="15 June 2021"
          lang="Next.js"
          title="Portfolio Website"
          description="Fully Responsive Website Built with Next.js(newest technology based on React.js) and react icons library. Personal portfolio page, about my biggest passion (programing, web development). Couple of few projects which I created as a self-taught programmer."
          link="/"
          git="https://github.com/MarioG8?tab=repositories"
        />
        <Card
          img="/images/nodemailer.jpg"
          date="23 June 2021"
          lang="node.js & express"
          title="Node.js Email App"
          description="Node.js and Express application using handlebars and Nodemailer module add to simple responsive contact form. Nodemailer - module for node.js apps to allow easy email sending to list of users which we will specify. Deployed on the Heroku."
          link="https://nodejs-email-app.herokuapp.com/"
          git="https://github.com/MarioG8?tab=repositories"
        />
      </main>
    </>
  );
}

export default ProjectsPage;

import Head from "next/head";
import ShowcaseSec from "@/components/ShowcaseSec";
import styles from "@/styles/ProjectsPage.module.css";

import Card from "@/components/Card";

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Few of my Projects" />
      </Head>
      <ShowcaseSec />
      <div className={styles.projects}>
        <h2>$My Projects;</h2>
      </div>
      <main className={styles.projects_container}>
        <Card
          img="/images/thunder.jpg"
          date="25 Oct 2020"
          lang="Html,CSS,JS"
          title="Surfing School Website"
          description="Simple weather application based on Html Css and Vanilla JavaScript, external Api from https://api.openweathermap.org/data/2.5/
          Daily weather around the world, for the city selected by the user. "
          link="https://weather-application-mario.netlify.app/"
          git="https://github.com/MarioG8?tab=repositories"
        />
        <Card
          img="/images/killerwhale.jpg"
          date="5 Jan 2021"
          lang="Html,CSS,JS"
          title="Surfing School Website"
          description="Full responsive Single Page Website, built with Html,Sass,Vanilla JavaScript and GSAP animation.Website about water sports Windsurfing and Surfing school."
          link="https://killerwhale.netlify.app/"
          git="https://github.com/MarioG8?tab=repositories"
        />
        <Card
          img="/images/stoa.jpg"
          date="5 May 2021"
          lang="React.js,Scss"
          title="Stoa React Website"
          description="Full Responsive React website built with React.js and Sass.Website devoted to the subject of stoic philosophy.
          Golden thoughts of the main characters of this trend and their short biographies "
          link="https://stoa-app.netlify.app/"
          git="https://github.com/MarioG8?tab=repositories"
        />
        <Card
          img="/images/code_016.jpg"
          date="15 June 2021"
          lang="Next.js"
          title="Portfolio Website"
          description="Fully Responsive Website Built with Next.js(one of the best and newest technologies based on React.js) and react icons library.Portfolio page about my biggest passion (programing) and projects which I create as a self-taught programmer."
          link="/"
          git="https://github.com/MarioG8?tab=repositories"
        />
      </main>
    </>
  );
}

export default ProjectsPage;

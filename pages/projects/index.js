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
          date="28 Nov 2020"
          lang="Html,CSS,JS"
          title="Surfing School Website"
          description="Lorem ipsum dolor sit amet "
          link="https://killerwhale.netlify.app/"
          git="https://github.com/MarioG8?tab=repositories"
        />
        <Card
          img="/images/killerwhale.jpg"
          date="28 Nov 2020"
          lang="Html,CSS,JS"
          title="Surfing School Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae cum natus officiis adipisci debitis nesciunt consequuntur, modi voluptates quis, ratione sequi, omnis iusto est."
          link="https://killerwhale.netlify.app/"
          git="https://github.com/MarioG8?tab=repositories"
        />
        <Card
          img="/images/stoa.jpg"
          date="28 Nov 2020"
          lang="Html,CSS,JS"
          title="Surfing School Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae cum natus officiis adipisci debitis nesciunt consequuntur, modi voluptates quis, ratione sequi, omnis iusto est."
          link="https://killerwhale.netlify.app/"
          git="https://github.com/MarioG8?tab=repositories"
        />
        <Card
          img="/images/background.jpg"
          date="15 June 2021"
          lang="Next.js"
          title="Portfolio Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae cum natus officiis adipisci debitis nesciunt consequuntur, modi voluptates quis, ratione sequi, omnis iusto est."
          link="https://killerwhale.netlify.app/"
          git="https://github.com/MarioG8?tab=repositories"
        />
      </main>
    </>
  );
}

export default ProjectsPage;

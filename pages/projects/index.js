import Image from "next/image";
import Head from "next/head";
import ShowcaseSec from "@/components/ShowcaseSec";
import styles from "@/styles/ProjectsPage.module.css";

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Few of my Projects" />
      </Head>
      <ShowcaseSec />
      <main className={styles.projects}></main>
    </>
  );
}

export default ProjectsPage;

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
          lang="Html, CSS, JavaScript"
          title="Weather App"
          description="Weather App built with  Html, Css, and Vanilla JavaScript, external Api from openweathermap.org
          Daily weather(cloudiness, temp) around the world, for the city selected by the user."
          link="https://weather-application-mario.netlify.app/"
          git="https://github.com/MarioG8/Weather-App"
        />
        <Card
          img="/images/killerwhale.jpg"
          date="5 Jan 2021"
          lang="Html, CSS, JavaScript"
          title="Surfing School Website"
          description="Full responsive Single Page Website, built with Html,   Sass, Vanilla JavaScript, GSAP animation, custom animated icons and contact form. A Business page about water sports. Windsurfing and Surfing school."
          link="https://killerwhale.netlify.app/"
          git="https://github.com/MarioG8/Surfing-School-Full-Responsive-Website"
        />
        <Card
          img="/images/stoa.jpg"
          date="5 May 2021"
          lang="React.js, Scss"
          title="Stoa React Website"
          description="Full Responsive React website built with React.js and Sass, React icons, scroll, and React router. Website devoted to stoic philosophy.
          Golden thoughts of the main heros(Epictetus, Seneca, M.Aurelius)"
          link="https://stoa-app.netlify.app/"
          git="https://github.com/MarioG8/React-Stoa-Website-"
        />
        <Card
          img="/images/404_006.jpg"
          date="15 June 2021"
          lang="Next.js"
          title="Portfolio Website"
          description="Fully Responsive Website Built with Next.js(newest technology based on React.js) and react icons library. Personal portfolio page, about my biggest passion (programing, web development). Couple of few projects which I created as a self-taught programmer."
          link="/"
          git="https://github.com/MarioG8/Next.js-Portfolio-Website"
        />
        <Card
          img="/images/nodemailer.jpg"
          date="23 June 2021"
          lang="Node.js, Express"
          title="Email Application"
          description="Node.js and Express application using handlebars and Nodemailer module add to simple responsive contact form. Nodemailer - module for node.js apps to allow easy email sending to list of users which we will specify. Deployed on the heroku."
          link="https://mariog8-email-app.onrender.com"
          git="https://github.com/MarioG8/Node.js-Email-App"
        />
        <Card
          img="/images/task_list.jpg"
          date="18 July 2021"
          lang="Node.js, MongoDB"
          title="Task Manager API"
          description="CRUD Task List API application built with node.js, express, mongoDB and fontAwesome(icons). It has four basic functionality: Create, Read, Update and Delete. All persisting data is on a database(mongoDB). Responsive layout. Deployed on the heroku."
          link="https://mariog8-tasklist-app.onrender.com"
          git="https://github.com/MarioG8/Node.js-Task-Manager-API"
        />
        <Card
          img="/images/google.jpg"
          date="21 August 2021"
          lang="Next.js, TailwindCSS"
          title="Google Clone"
          description="Google Clone with a working search engine, Responsive Website Built with Next.js(newest technology based on React.js) Server Side Rendering, Tailwind CSS - CSS framework, heroic and react icons and simple pagination. Design close to the original. Deployed on netlify."
          link="https://google-clone-nextjs.netlify.app/"
          git="https://github.com/MarioG8/"
        />
        <Card
          img="/images/chat_005.jpg"
          date="2 September 2021"
          lang="Node.js, Socket.io"
          title="Chat Application"
          description="Real time Web application built with Node.js, Websocket, Socket.io and Mustache template syntax. The Chat App with real time data transfer and simple responsive design layout. An application that enables communication, writing messages between users in web browser. Deployed on heroku."
          link="https://mariog8-chat-app.onrender.com"
          git="https://github.com/MarioG8/Node.js-Chat-App-"
        />
        <Card
          img="/images/beach_5.jpg"
          date="22 October 2021"
          lang="Node.js, Express"
          title="Weather App 2.0"
          description="Weather App 2.0(Client side/Server side) built with  Html, Css, JavaScript, Node.js, Express, cors, Own proxy server with rate limit, api caching. External Api from openweathermap.org.
            Daily weather(cloudiness, temp) around the world, for the city selected by the user."
          link="https://mariog8-weather-app-v2-proxy-server.onrender.com"
          git="https://github.com/MarioG8/Weather-App-2.0-API-Proxy-Server"
        />
        <Card
          img="/images/music_002.jpg"
          date="10 November 2022"
          lang="React.js, TailwindCSS"
          title="Spotify Clone 2.0.1"
          description="Spotify Clone Application with music player, search, lyrics, popular music near by U, worldwide top charts, and much more.Built with React.js, Redux, Axios, Tailwindcss, React-icons and Swiper. External API from RapidAPI - 'Shazam Core API' and Geolocation API from ipify.org"
          link="https://mariog8-muisc-app.netlify.app"
          git="https://github.com/MarioG8/Spotify-Clone-2.0.1"
        />
      </main>
    </>
  );
}

export default ProjectsPage;

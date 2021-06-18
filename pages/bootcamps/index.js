import Head from "next/head";
import styles from "@/styles/Bootcamps.module.css";
import Item from "@/components/Item";
import { FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GiTriangleTarget } from "react-icons/gi";
import Showcase from "@/components/Showcase";

function BootcampsPage() {
  return (
    <>
      <Head>
        <title>Knowledge</title>
        <meta name="description" content="Bootcamps which I passed" />
      </Head>
      <Showcase image="/images/code_000.jpg" position="center" />
      <main className={styles.bootcamp}>
        <div className={styles.bootcamp_container}>
          <h2>bootcamps..</h2>
          <Item
            img="/images/javascript.jpg"
            title="JavaScript Jan 2021"
            subtitle="The Complete JavaScript Bootcamp 2021"
            icon={<DiJavascript1 size={45} color="#b3b323" />}
            link="https://codingheroes.io/"
          />
          <Item
            img="/images/node.png"
            title="Node.js Jun 2021"
            subtitle="The Node.js Express Complete Bootcamp 2021"
            icon={<FaNodeJs size={45} color="green" />}
            link="https://codingheroes.io/"
          />
          <Item
            img="/images/react3.png"
            title="React.js Oct 2020"
            subtitle="React.js & Redux - The Complete Guide 2021"
            icon={<FaReact size={45} color="#0fb0e6" />}
            link="https://academind.com/"
          />
          <Item
            img="/images/next.png"
            title="Next.js May 2021"
            subtitle="Next.js & React.js - The Complete Guide 2021"
            icon={<GiTriangleTarget size={45} color="black" />}
            link="https://academind.com/"
          />
        </div>
      </main>
    </>
  );
}

export default BootcampsPage;

import Head from "next/head";
import Heading from "@/components/Heading";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page | Portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Heading />
    </>
  );
}

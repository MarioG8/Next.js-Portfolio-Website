import Showcase from "@/components/Showcase";
// import ShowcaseSec from "@/components/ShowcaseSec";
import styles from "@/styles/Contact.module.css";
import Head from "next/head";
import FormContact from "@/components/FormContact";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <Showcase />
      {/* <ShowcaseSec /> */}
      <main className={styles.contact}>
        <div className={styles.contact_container}>
          <h1 className="lg-heading">
            Contact
            <span className="text-secondary">Me</span>
          </h1>
          <h2 className="">This is how you can reach me...</h2>
          <div className={styles.boxes}>
            <div>
              <span className="text-secondary">Email: </span> johndoe@test.com
            </div>
            <div>
              <span className="text-secondary">Phone: </span> (555) 555-5555
            </div>
            <div>
              <span className="text-secondary">Address: </span> 50 Main st
              Boston MA 02101
            </div>
          </div>
        </div>
        <div className={styles.form_container}>
          <FormContact />
        </div>
      </main>
    </>
  );
}

export default ContactPage;

import Showcase from "@/components/Showcase";
import styles from "@/styles/Contact.module.css";
import Head from "next/head";
import FormContact from "@/components/FormContact";
import Item from "@/components/Item";
import { FiPhone } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <Showcase />
      <main className={styles.contact}>
        <div className={styles.contact_container}>
          <Item
            img="/images/phone_001.jpg"
            title="(---------)+48 799-11-33-59"
            subtitle="Phone Number"
            icon={<FaPhoneSquareAlt size={45} />}
          />
          <Item
            img="/images/mailbox_001.jpg"
            title="golikmariusz@yahoo.com"
            subtitle="Email Address"
            icon={<IoMdMail size={45} />}
          />
          <Item
            img="/images/cracow_001.jpg"
            title="Cracow 30-698 Familijna 5"
            subtitle="Address"
            icon={<ImAddressBook size={45} />}
          />
        </div>
        <FormContact />
      </main>
    </>
  );
}

export default ContactPage;

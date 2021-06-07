import Card from "@/components/Card";
import Form from "@/components/Form";
import styles from "@/styles/Contact.module.css";

function ContactPage() {
  return (
    <section className={styles.contact_page}>
      <div className={styles.header}>
        <h1 className="lg-heading">
          Contact <span className="text-secondary">me</span>..
        </h1>
      </div>
      <article className={styles.contact_info}>
        <Card
          img="/images/phone_002.jpg"
          title="Call me"
          description=""
          number="+48 799-11-33-59"
        />
        <Card
          img="/images/mailbox_001.jpg"
          title="Write to me"
          description="golikmariusz@yahoo.com"
          number=""
        />
        <Card
          img="/images/cracow_001.jpg"
          title="Visit me"
          description="Cracow 30-698 "
          number=""
        />
      </article>
      <article className="form_container">
        <Form />
      </article>
    </section>
  );
}

export default ContactPage;

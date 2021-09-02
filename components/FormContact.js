import styles from "@/styles/FormContact.module.css";
import { BiMessageRoundedDots } from "react-icons/bi";

function FormContact() {
  // window.onbeforeunload = () => {
  //   for (const form of document.getElementsByTagName("form")) {
  //     form.reset();
  //   }
  // };
  return (
    <div className={styles.form_container}>
      <div className={styles.auth}>
        <h1 className={styles.header}>
          <BiMessageRoundedDots size={40} className={styles.icon} />
          Message
        </h1>
        <form action="https://formspree.io/f/xrgrkkyz" method="POST">
          <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" required />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" required />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required></textarea>
          </div>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </div>
    </div>
  );
}

export default FormContact;

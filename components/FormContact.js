import styles from "@/styles/FormContact.module.css";
import { BiMessageDetail } from "react-icons/bi";

function FormContact() {
  return (
    <div className={styles.auth}>
      <h1 className="btn-icon">
        <BiMessageDetail size={40} /> Message
      </h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </div>
  );
}

export default FormContact;

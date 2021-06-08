import styles from "@/styles/FormContact.module.css";
import { BiMessageDetail } from "react-icons/bi";

function FormContact() {
  return (
    <div className={styles.form_container}>
      <div className={styles.auth}>
        <h1 className="btn-icon">
          <BiMessageDetail size={40} /> Message
        </h1>
        <form>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" />
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
    </div>
  );
}

export default FormContact;

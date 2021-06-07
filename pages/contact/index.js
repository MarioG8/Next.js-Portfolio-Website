import Showcase from "@/components/Showcase";
import ShowcaseSec from "@/components/ShowcaseSec";
import styles from "@/styles/Contact.module.css";
import { BiMessageDetail } from "react-icons/bi";

function ContactPage() {
  return (
    <>
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
        </div>
      </main>
    </>
  );
}

export default ContactPage;

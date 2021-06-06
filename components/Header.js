import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header(props) {
  const [menu, setShowMenu] = useState(true);

  const openMenuHandler = () => setShowMenu(!menu);
  const closeMenuHandler = () => setShowMenu(true);

  return (
    <header>
      <div
        className={menu ? "menu-btn" : "menu-btn close"}
        onClick={openMenuHandler}
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <nav className={menu ? "menu" : "menu show"}>
        <div className={menu ? "menu-branding" : "menu-branding show"}>
          <div className="portrait-img-2">
            <Image
              src="/images/ed33.jpg"
              width={280}
              height={400}
              quality={100}
              className="portrait-img"
            />
          </div>
        </div>
        <ul className={menu ? "menu-nav" : "menu-nav show"}>
          <li className={menu ? "nav-item current" : "nav-item show"}>
            <Link href="/">
              <a className="nav-link" onClick={closeMenuHandler}>
                Home
              </a>
            </Link>
          </li>
          <li className={menu ? "nav-item" : "nav-item show"}>
            <Link href="about.html">
              <a className="nav-link" onClick={closeMenuHandler}>
                About Me
              </a>
            </Link>
          </li>
          <li className={menu ? "nav-item" : "nav-item show"}>
            <Link href="work.html">
              <a className="nav-link" onClick={closeMenuHandler}>
                My Work
              </a>
            </Link>
          </li>
          <li className={menu ? "nav-item" : "nav-item show"}>
            <Link href="contact.html">
              <a className="nav-link" onClick={closeMenuHandler}>
                How To Reach Me
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

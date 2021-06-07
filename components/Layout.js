import Background from "./Background";
import Footer from "./Footer";
import Menu from "./Menu";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Menu />
      {router.pathname === "/" && <Background />}
      {/* <Background /> */}
      <main className="main-content">{children}</main>
      {router.pathname !== "/" && <Footer />}
    </>
  );
}

export default Layout;

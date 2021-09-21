import Background from "./Background";
import Footer from "./Footer";
import Menu from "./Menu";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/404" && <Menu />}
      {router.pathname === "/" && <Background />}
      <main className="main-content">{children}</main>
      {router.pathname !== "/" && router.pathname !== "/404" && <Footer />}
    </>
  );
}

export default Layout;

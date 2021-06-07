import Background from "./Background";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Header />
      {router.pathname === "/" ? <Background /> : null}
      {/* <Background /> */}
      <main>{children}</main>
      {router.pathname !== "/" ? <Footer /> : null}
    </>
  );
}

export default Layout;

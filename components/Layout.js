import Background from "./Background";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

function Layout(props) {
  const router = useRouter();
  return (
    <>
      <Header />
      <Background />
      <main>{props.children}</main>
      {router.pathname !== "/" ? <Footer /> : null}
    </>
  );
}

export default Layout;

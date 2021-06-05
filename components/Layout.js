import Background from "./Background";
import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header />
      <Background />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <BackToTopButton />
      </main>
      <Footer />
    </>
  );
};
export default Root;

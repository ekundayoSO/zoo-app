import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton";

const Root = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Outlet />
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
};
export default Root;

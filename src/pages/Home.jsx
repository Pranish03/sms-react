import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = ({ user }) => {
  return (
    <>
      <Header user={user} />
      <Hero user={user} />
      <Footer />
    </>
  );
};

export default Home;

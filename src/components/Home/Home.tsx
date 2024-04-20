import Modal from "../../Modals/Modal";
import Card from "../Cards/Card";
import Footer from "../Footer";
import BottomBar from "./BottomBar";
import Hero from "./Hero";

const Home = () => {
  return (
    <div class="relative">
      <Hero />
      <Card />
      <Footer />
      <Modal />
      <div class="bottom-0 z-50 fixed w-full md:hidden">
        <BottomBar />
      </div>
    </div>
  );
};

export default Home;

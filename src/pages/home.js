import Nav from "../components/Nav";
import Footer from "../components/Footer";
import leaf from "../images/leaf.png";

const Home = () => {
  return (
    <div>
      <Nav />
      <img className='leafBK' src={leaf} alt="monstera plant" />
      <Footer />
    </div>
  );
};

export default Home;

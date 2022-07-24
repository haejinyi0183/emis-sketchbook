import Nav from "../components/Nav";
import Footer from "../components/Footer";
import leaf from "../images/leaf.png";
import emiPic from "../images/emi.png";

const Home = () => {
  return (
    <div>
      <Nav />
     <div className="imageContainer">
      <img className='leafBK' src={leaf} alt="monstera plant" />
      <img className="emiPic" src={emiPic} alt="Emi" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

import facebookLogo from "../images/facebook.png";
import twitterLogo from "../images/twitter.png";
import instagramLogo from "../images/instagram.png";

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="footer fixed-bottom text-center">
      <a href="https://www.facebook.com">
        <img src={facebookLogo} alt="facebook icon" width="30px" />
      </a>

      <a className="middleSocial" href="https://www.instagram.com">
        <img src={instagramLogo} alt="instagram icon" width="30px" />
      </a>

      <a href="https://www.twitter.com">
        <img src={twitterLogo} alt="twitter icon" width="30px" />
      </a>

      <p className="copyright mt-3">Emis Urasaki &copy; {getYear}</p>
    </footer>
  );
};

export default Footer;

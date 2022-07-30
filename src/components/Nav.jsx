import emiLogo from '../images/emiLogo.png'

const Nav = () => {
  return (
    
      <header>
        <img href="/" width='30%' src={emiLogo} className="companyName" alt='company logo' />
        <label>
          <input type="checkbox" />
          <span className="menu">
            {" "}
            <span className="hamburger"></span>{" "}
          </span>
          <ul>
            <li>
              {" "}
              <a href="/">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/lash">Lash</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/nail">Nail</a>{" "}
            </li>
          </ul>
        </label>
      </header>
    
  );
};

export default Nav;

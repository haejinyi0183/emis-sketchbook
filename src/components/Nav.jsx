const Nav = () => {
  return (
    
      <header>
        <a href="/" className="companyName">
        Emis Sketchbook</a>
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
              <a href="../pages/about">About</a>{" "}
            </li>
            <li>
              {" "}
              <a href="../pages/contact">Contact</a>{" "}
            </li>
          </ul>
        </label>
      </header>
    
  );
};

export default Nav;

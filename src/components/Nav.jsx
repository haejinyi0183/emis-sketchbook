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
              <a href="/about">About</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/contact">Contact</a>{" "}
            </li>
          </ul>
        </label>
      </header>
    
  );
};

export default Nav;

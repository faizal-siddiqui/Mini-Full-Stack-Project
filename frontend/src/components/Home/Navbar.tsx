import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
type Props = {};

const Navbar = (props: Props) => {
  const [on, setOn] = useState<boolean>(true);
  const navigate = useNavigate();
  let token = document.cookie.split(";")[0].split("=")[1];

  const logout = () => {
    document.cookie = "token=; expires=Thu, 31-Aug-2018 01:01:01 GMT";
    navigate("/login");
  };

  return (
    <>
      <div>
        <div className="navbar">
          <GiHamburgerMenu onClick={() => setOn(!on)} className="hamburger" />
          <div className={on ? "links" : "hide"}>
            <Link className="href" to="/">
              <p className="navLinks">Home</p>
            </Link>
            <Link className="href" to="/about">
              <p className="navLinks">About</p>
            </Link>
            <Link className={token ? "hideLink" : "href"} to="/login">
              <p className="navLinks">Login</p>
            </Link>
            <Link className={token ? "hideLink" : "href"} to="/signup">
              <p className="navLinks">SignUp</p>
            </Link>
            <p className={token ? "navLinks" : "hideLink"}>
              <button onClick={logout}>Logout</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

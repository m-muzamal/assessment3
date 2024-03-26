import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import "./nav.scss";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useSelector } from "react-redux";

const Nav = () => {
  const [arrow, setArrow] = useState(true);
  const [scroll, setScroll] = useState();
  const [search, setSearch] = useState("");
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //search data
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <nav
      style={{
        boxShadow:
          scroll > 0
            ? "0px 10px 10px -5px rgba(0, 0, 0, 0.3)"
            : "0px 10px 10px -5px rgba(0, 0, 0, 0)",
      }}
    >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="items">
        <li
          className="topics"
          onMouseEnter={() => setArrow(false)}
          onMouseLeave={() => setArrow(true)}
        >
          <span>TOPICS</span>
          {arrow ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          {!arrow && (
            <ul className="options">
              <li>afs</li>
              <li>assad</li>
              <li>asdasdas</li>
              <li>asd</li>
            </ul>
          )}
        </li>
        <li className="search">
          <input
            type="text"
            placeholder="Search"
            onKeyDown={(e) => handleSearch(e)}
          />
          <SearchIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

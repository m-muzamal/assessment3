import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import "./nav.scss";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useDispatch, useSelector } from "react-redux";
import { addSearch, clearSearchData } from "../../Redux/dataSclice/dataSlice";

const Nav = () => {
  const [arrow, setArrow] = useState(true);
  const [scroll, setScroll] = useState();
  const [search, setSearch] = useState("");
  const { data, searchData } = useSelector((state) => state.data);
  // console.log(searchData);
  const dispatch = useDispatch();

  //////////////////////////////////////////
  useEffect(() => {
    if (search.trim() === "") {
      if (searchData.length !== 0) {
        dispatch(addSearch([]));
      }
      return;
    }

    if (data.length > 0) {
      const filterData = data[0].filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      dispatch(addSearch(filterData));
    }

    return () => {
      dispatch(clearSearchData());
    };
  }, [data, search]);

  //////////////////////////////////////////
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
            value={search}
            onChange={handleSearch}
          />
          <SearchIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

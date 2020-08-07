import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./Sidebar.css";

const Sidebar = ({ path }) => {
  return (
    <section className="px-3 py-4" id="sidebar">
      <div id="brand" className="my-3">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div id="recommended" className="my-5">
        <h5 className="sidebar-heading">RECOMMENDED</h5>
        <ul className="nav-link-group list-unstyled px-0">
          <li className="nav-link">
            {" "}
            <Link to="/" id={path === "/" ? "active-nav" : ""}>
              <i className="pr-3 fab fa-searchengin"></i> Explore
            </Link>
          </li>
          <li className="nav-link">
            {" "}
            <Link to="/artists" id={path === "/artists" ? "active-nav" : ""}>
              <i className="pr-3 fas fa-users"></i>Artists
            </Link>{" "}
          </li>
          <li className="nav-link">
            {" "}
            <Link to="/albums" id={path === "/albums" ? "active-nav" : ""}>
              <i className="pr-3 fas fa-compact-disc"></i> Albums
            </Link>
          </li>
          <li className="nav-link">
            {" "}
            <Link to="/tracks" id={path === "/tracks" ? "active-nav" : ""}>
              <i className="pr-3 fas fa-compact-disc"></i> Tracks
            </Link>
          </li>
        </ul>
      </div>

      <div id="library" className="my-5">
        <h5 className="sidebar-heading">MY LIBRARY</h5>
        <ul className="nav-link-group list-unstyled px-0">
          <li className="nav-link">
            {" "}
            <Link to="/recently-played">
              <i className="pr-3 fas fa-music"></i> Recently Played
            </Link>
          </li>
          <li className="nav-link">
            {" "}
            <Link to="/artists">
              <i className="pr-3 fas fa-heart"></i> Favorite Songs
            </Link>{" "}
          </li>
          <li className="nav-link">
            {" "}
            <Link to="/albums">
              <i className="pr-3 fas fa-compact-disc"></i> Albums
            </Link>
          </li>
        </ul>
      </div>

      <div id="playlists" className="my-5">
        <h5 className="sidebar-heading">PLAYLIST</h5>
        <i className="fas fa-plus add-btn"></i>
        <ul className="nav-link-group list-unstyled px-0">
          <li className="nav-link">
            {" "}
            <Link to="/">
              <i className="pr-3 fas fa-compact-disc"></i> Playlist 1
            </Link>
          </li>
          <li className="nav-link">
            {" "}
            <Link to="/artists">
              <i className="pr-3 fas fa-compact-disc"></i> Playlist 2
            </Link>{" "}
          </li>
          <li className="nav-link">
            {" "}
            <Link to="/albums">
              <i className="pr-3 fas fa-compact-disc"></i> Playlist 3
            </Link>
          </li>
          <li className="nav-link">
            {" "}
            <Link to="/albums">
              <i className="pr-3 fas fa-compact-disc"></i> Playlist 4
            </Link>
          </li>{" "}
          <li className="nav-link">
            {" "}
            <Link to="/albums">
              <i className="pr-3 fas fa-compact-disc"></i> Playlist 5
            </Link>
          </li>{" "}
          <li className="nav-link">
            {" "}
            <Link to="/albums">
              <i className="pr-3 fas fa-compact-disc"></i> Playlist 6
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;

import React from "react";
// import BackgroundImage from "./bg-3.png";
import "./Header.css";

class Header extends React.Component {
  render() {
    const header = this.props.header;
    const name = this.props.name;
    const description = this.props.description;
    const image = this.props.image;
    return (
      <div
        id="header"
        className="row bg"
        // style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="col-5 header-description">
          <h5 className="featured-tag text-center d-block mt-5">{header}</h5>
          <h1 className="header-name d-block mt-3 mb-0">
            <strong>{name}</strong>
          </h1>
          <p className="text-left header-paragraph">{description}</p>
        </div>
        <div className="offset-1 col-5">
          <img
            src={image}
            alt={image}
            className="float-left mx-auto d-block header-img"
          />
        </div>
      </div>
    );
  }
}
export default Header;

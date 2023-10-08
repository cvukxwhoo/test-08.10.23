import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="nav" to="/">
        <Button>All</Button>
      </Link>
      <Link className="nav" to="/active">
        <Button>Active</Button>
      </Link>
      <Link className="nav" to="/completed">
        <Button>Completed</Button>
      </Link>
    </div>
  );
};

export default Header;

import React from "react";
import { useLocation, Link } from "react-router-dom";

const CustomLink = ({ children, to }) => {
  const location = useLocation();
  const match = location.pathname === to;
  return (
    <span className={match ? 'active' : ''}>
      <Link to={to}>{children}</Link>
      { match ? ' 👈' : ''}
    </span>
  );
};

export default CustomLink;

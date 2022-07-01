import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ logout, currentUser }) => {

  return (
    <div
      className="logo"
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <i className="fa-solid fa-utensils" style={{ margin: "10px" }}></i>

      <NavLink style={{ margin: "10px" }} to="/">
        Home
      </NavLink>
      { currentUser ? (
        <>
          <NavLink style={{ margin: "10px" }} to="/recipes">
            Recipes
          </NavLink>
          <NavLink style={{ margin: "10px" }} to="/recipes/new">
            Add Recipe
          </NavLink>
          <Link style={{ margin: "10px" }} to="/Home" onClick={logout}>
            Logout
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;

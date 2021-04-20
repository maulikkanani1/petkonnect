import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyJumbotron = ({ title, route }) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container d-flex  justify-content-center">
        <div>
          <h1 className="display-4 text-center">{title}</h1>
          <nav aria-label="breadcrumb ">
            <ul className="breadcrumb bg-transparent">
              {route.map((item) => (
                <li className="breadcrumb-item ">
                  <Link
                    className={item.isActive ? "text-dark" : "text-primary"}
                    to={item.to ? item.to : "javascript:void(0)"}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MyJumbotron;

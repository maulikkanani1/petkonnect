import React, { useEffect, useState } from "react";

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
                  <a className={item.isActive ? "text-dark" : "text-primary"} href="#">
                    {item.title}
                  </a>
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

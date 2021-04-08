import React, { useEffect } from "react";
import { GetallStores } from "../ApiService";

const DashBoard = () => {
  useEffect(() => {
    GetallStores().then(({ data }) => {
      console.log(data);
    });
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default DashBoard;

import React from "react";
import Navbar1 from "../pages/Navbar1";

function DefaultLayout(props) {
  return (
    <>
      <div>
        <div className="header">
          <Navbar1 />
        </div>
        <div className="content">{props.children}</div>
      </div>
    </>
  );
}
export default DefaultLayout;

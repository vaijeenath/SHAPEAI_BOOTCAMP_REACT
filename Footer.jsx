import React from "react";

function Footer() {

  var currentyear = new Date().getFullYear();
  return (
    <footer>
      <p>copyright @ {currentyear}</p>
    </footer>
  );
}

export default Footer;

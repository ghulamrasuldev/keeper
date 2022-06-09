import React from "react";
import "./footer.css"

const date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <div>
      <footer>
        <p>© {year} Keeper Inc.</p>
      </footer>
    </div>
  );
}

export default Footer;
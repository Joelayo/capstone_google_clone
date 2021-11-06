import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer_upper">
        <p className="country">Nigeria</p>
        <hr
          width="100%"
          style={{
            border: "none",
            borderBottom: "1px solid rgb(61, 61, 61)",
          }}
        />
        <div className="footer">
          <div className="footer_bottom1">
            <h5 className="caption">About</h5>
            <h5 className="caption">Advertising</h5>
            <h5 className="caption">Business</h5>
            <h5 className="caption">How Search Works</h5>
          </div>
          <div className="footer_bottom2">
            <h5 className="caption">Privacy</h5>
            <h5 className="caption">Terms</h5>
            <h5 className="caption">Settings</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

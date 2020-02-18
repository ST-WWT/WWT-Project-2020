import React from "react";

const Footer = (props) => {
  return (
    <div className="foot stick-bottom">
        <div className="fbox">
            <i className="fa fa-copyright"></i> Graphite
            <br /><a href="#">Legal</a> | <a href="#">Jobs</a> | <a href="#">Branding</a>
        </div>
        <div className="fbox">
            <i className="fab fa-instagram"></i> <a href="#" target="_blank">Instagram</a>
            <br /><i className="fab fa-twitter"></i> <a href="https://twitter.com/KryptoDevs" target="_blank">Twitter</a>
        </div>
    </div>
  );
};

export default Footer;
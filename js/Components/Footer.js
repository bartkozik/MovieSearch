import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container border-top pt-4">
        <p>MoviesDB &copy; 2019</p>
        <p className="small text-muted">
          Jest to przykładowa aplikacja napisana w React!
        </p>
      </div>
    </footer>
  );
};
Footer.displayName = "Footer";

export default Footer;

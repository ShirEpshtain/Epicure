import React from "react";
import "../ Assets /Footer/Footer.scss";

const Footer: React.FC = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <p className="footer">Contact Us</p>
          <p className="footer">Terms of Use</p>
          <p className="footer">Privacy Policy</p>

          <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; shir epshtain</small>
        </div>
      </div>
        </div>
      </footer>

  
    </div>
  );
};

export default Footer;

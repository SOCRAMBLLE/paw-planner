import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div>
        <span>Ⓒ</span>
        {year} Paw Planner
      </div>
      <Link to="https://marcosfraga.ch" target="_blank">
        <img src="https://www.marcosfraga.ch/images/logo-marcos.webp" />
      </Link>
    </footer>
  );
};

export default Footer;

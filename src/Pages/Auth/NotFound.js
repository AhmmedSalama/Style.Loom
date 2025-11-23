import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-message">Page Not Found</h2>
        <p className="notfound-description">
          Sorry, the page you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/" className="notfound-home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

function Err403({role}) {
  return (
    <div className="d-flex w-100 flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <FontAwesomeIcon icon={faBan} size="4x" className="text-danger mb-3" />
      <h1 className="display-3 fw-bold text-danger">403</h1>
      <h2 className="mb-3">Access Denied</h2>
      <p className="text-muted mb-4">You don't have permission to access this page.</p>
      <Link to={role === "1996" ? "/Dashboard/users/writer" :"/"} className="btn btn-primary">
      {role === "1996" ? "Go Back To Writer Page" :"Go To Home Page"}
      </Link>
    </div>
  );
}

export default Err403;

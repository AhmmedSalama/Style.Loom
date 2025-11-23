import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { baseURL, USER } from "../../Api/Api";
import Cookie from "cookie-universal";
import { Axios } from "../../Api/axios";
import LoadingSpinner from "../../Components/LoadingSpinner";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setrole] = useState("");
  const [password, sepassword] = useState("");
  const [disable, setdisable] = useState(true);
  const [loadin, setloadin] = useState(false);
  const cookie = Cookie();
  const navigate = useNavigate();

  const validation = password !== "" && name !== "" && email !== "" && role !== "";


  function handleUpdate(e) {
    setloadin(true);
    e.preventDefault();

    try {
      Axios.post(`${USER}/add`, {
        name: name,
        email: email,
        role: role,
        password: password,
      });
      navigate("/Dashboard/users");
    } catch (err) {
      setloadin(false);
    }
  }

  return (
    <div className="container mt-4">
      {loadin ? <LoadingSpinner /> : null}
      <h1 className="mb-4">Add User</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => sepassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Role</label>
          <select
            className="form-control"
            value={role}
            onChange={(e) => setrole(e.target.value)}
            required
          >
            <option disabled value="">Select Role</option>
            <option value="1995">Admin</option>
            <option value="2001">User</option>
            <option value="1999">Products Manager</option>
            <option value="1996">Writer</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success" disabled={!validation}>
          Save
        </button>
      </form>
    </div>
  );
}

export default AddUser;

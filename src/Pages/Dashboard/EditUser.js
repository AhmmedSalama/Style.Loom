import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {  USER } from "../../Api/Api";
import { Axios } from "../../Api/axios";
import LoadingSpinner from "../../Components/LoadingSpinner";

function EditUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setrole] = useState("");
  const [disable, setdisable] = useState(true);
  const [loadin, setloadin] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setloadin(true)
    Axios.get(`/${USER}/${id}`)
      .then((data) => {
        setName(data.data.name);
        setEmail(data.data.email);
        setrole(data.data.role);
        setdisable(false); 
        setloadin(false)
      })
      .catch((err) => {
        navigate("/404",{replace:true})
      });
  }, []);

  async function handleUpdate(e) {
    setloadin(true)
    e.preventDefault();
    try {
      await Axios.post(`${USER}/edit/${id}`, {
        name: name,
        email: email,
        role: role,
      });
      navigate("/Dashboard/users");
    } catch (err) {
       setloadin(false)
    }
  }

  return (
    <div className="container mt-4">
       {loadin ? <LoadingSpinner/> :null} 
      <h1 className="mb-4">Edit User</h1>
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
    <option value="1996">Writer</option>
    <option value="1999">Products Manager</option>
  </select>
</div>
        <button disabled={disable} type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditUser;

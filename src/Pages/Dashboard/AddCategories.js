import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { baseURL, CAT, CATAdd, USER } from "../../Api/Api";
import Cookie from "cookie-universal";
import { Axios } from "../../Api/axios";
import LoadingSpinner from "../../Components/LoadingSpinner";

function AddCategories() {
  const [loadin, setloadin] = useState(false);
  const [title, settitle] = useState("");
  const [image, setimage] = useState();
  const navigate = useNavigate();

  const validation = title !== "" && image ;


  function handleUpdate(e) {
    setloadin(true);
    e.preventDefault();
    const form = new FormData();
    form.append("title",title);
    form.append("image",image)
    try {
      Axios.post(`${CATAdd}/add`, form);
      navigate("/Dashboard/Categories");
    } catch (err) {
      setloadin(false);
    }
  }

  return (
    <div className="container mt-4">
      {loadin ? <LoadingSpinner /> : null}
      <h1 className="mb-4">Add Category</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
  type="file"
  className="form-control"
  onChange={(e) => setimage(e.target.files[0])}
  required
/>

        </div>
        <button type="submit" className="btn btn-success" disabled={!validation}>
          Save
        </button>
      </form>
    </div>
  );
}

export default AddCategories;

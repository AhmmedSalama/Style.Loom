import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CAT, CATAdd } from "../../Api/Api";
import { Axios } from "../../Api/axios";
import LoadingSpinner from "../../Components/LoadingSpinner";

function EditCategory() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    Axios.get(`${CATAdd}/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((err) => {
        navigate("/404", { replace: true });
      });
  }, [id]);

  async function handleUpdate(e) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData();
    form.append("title",title);
    form.append("image",image)
 

    try {
      await Axios.post(`${CATAdd}/edit/${id}`, form);
      navigate("/Dashboard/Categories");
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <div className="container mt-4">
      {loading && <LoadingSpinner />}
      <h1 className="mb-4">Edit Category</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditCategory;

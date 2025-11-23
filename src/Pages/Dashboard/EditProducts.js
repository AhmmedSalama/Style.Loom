import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CAT, prod } from "../../Api/Api";
import { Axios } from "../../Api/axios";
import LoadingSpinner from "../../Components/LoadingSpinner";
import "./Dashboard.css";

function EditProducts() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]); // ids of images that will be removed from server
  const { id } = useParams();
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef("");
  const progressBarsRef = useRef([]);
  const uploadedImageIdsRef = useRef([]);
  const [form, setForm] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    discount: "",
    About: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`${CAT}`)
      .then((response) => setCategories(response.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    Axios.get(`/${prod}/${id}`)
      .then((response) => {
        setForm(response.data[0]);
        setExistingImages(response.data[0].images);
      })
      .catch((err) => console.log(err));
  }, []);

  const validation = form.title !== "" && newImages.length > 0;

  function handleInputChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmitEdit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      // delete marked server images
      for (let i = 0; i < imagesToDelete.length; i++) {
        await Axios.delete(`/product-img/${imagesToDelete[i]}`);
      }

      // update product data
      await Axios.post(`${prod}/edit/${id}`, form);
      navigate("/Dashboard/Products");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  async function handleImageUpload(e) {
    if (!id) {
      console.log("Product ID not found yet");
      return;
    }

    setNewImages([...e.target.files]);
    const selectedFiles = e.target.files;

    for (let i = 0; i < selectedFiles.length; i++) {
      const formData = new FormData();
      formData.append("image", selectedFiles[i]);
      formData.append("product_id", id);

      try {
        const res = await Axios.post("/product-img/add", formData, {
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percent = Math.floor((loaded * 100) / total);

            if (progressBarsRef.current[i]) {
              progressBarsRef.current[i].style.width = `${percent}%`;
              progressBarsRef.current[i].setAttribute("percent", `${percent}%`);
            }
          },
        });
        uploadedImageIdsRef.current[i] = res.data.id;
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function handleDeleteNewImage(index) {
    const imageId = uploadedImageIdsRef.current[index];
    try {
      await Axios.delete(`/product-img/${imageId}`);
    } catch (err) {
      console.log(err);
    } finally {
      setNewImages((prev) => prev.filter((_, i) => i !== index));
      uploadedImageIdsRef.current = uploadedImageIdsRef.current.filter(
        (_, i) => i !== index
      );
    }
  }

  function handleMarkExistingImageForDelete(id) {
    setExistingImages((prev) => prev.filter((img) => img.id !== id));
    setImagesToDelete((prev) => [...prev, id]);
  }

  const categoryOptions = categories.map((item) => (
    <option key={item.id} value={item.id}>
      {item.title}
    </option>
  ));

  const newImagesPreview = newImages.map((img, key) => (
    <div className="p-2" key={key}>
      <div className="d-flex align-items-center gap-2 border p-2">
        <img width={"80px"} src={URL.createObjectURL(img)} alt="" />
        <div>
          <p
            className="mb-1 text-truncate"
            style={{ maxWidth: "165px", display: "inline-block" }}
          >
            {img.name}
          </p>
          <p className="mb-1">
            size: {(img.size / (1024 * 1024)).toFixed(2)} MB
          </p>
        </div>
        <button
          onClick={() => handleDeleteNewImage(key)}
          className="btn btn-danger ms-auto mb-auto"
        >
          Delete
        </button>
      </div>

      <div className="custom-progress mt-2">
        <span
          ref={(el) => (progressBarsRef.current[key] = el)}
          percent={"0%"}
          style={{ width: "0%" }}
          className="inner-progress"
        ></span>
      </div>
    </div>
  ));

  const existingImagesPreview = existingImages.map((img) => (
    <div className="p-2" key={img.id}>
      <div className="d-flex align-items-center gap-2 border p-2">
        <img width={"80px"} src={img.image} alt="" />
        <button
          onClick={() => handleMarkExistingImageForDelete(img.id)}
          className="btn btn-danger ms-auto mb-auto"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      {loading ? <LoadingSpinner /> : null}
      <h1 className="mb-4">Edit Product</h1>
      <form onSubmit={handleSubmitEdit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={form.title}
            name="title"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-control"
            value={form.category}
            onChange={handleInputChange}
            required
            name="category"
          >
            <option disabled value="">
              Select category
            </option>
            {categoryOptions}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={form.description}
            name="description"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={form.price}
            name="price"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Discount</label>
          <input
            type="number"
            className="form-control"
            value={form.discount}
            name="discount"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">About</label>
          <textarea
            className="form-control"
            name="About"
            value={form.About}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            ref={fileInputRef}
            type="file"
            className="form-control"
            onChange={handleImageUpload}
            hidden
            multiple
          />
        </div>

        <div>
          <div
            onClick={() => fileInputRef.current.click()}
            style={{ border: "3px dashed #ccc", cursor: "pointer" }}
            className="d-flex align-items-center gap-2 mb-3 justify-content-center flex-column w-100 rounded p-3"
          >
            <img alt="upload img" src="/imgs/upload-icon.png" width={"100px"} />
            <p className="text-muted">Click to upload images</p>
          </div>
        </div>

        <div>{existingImagesPreview}</div>
        <div>{newImagesPreview}</div>

        <button
          type="submit"
          className="btn btn-success mb-5"
          disabled={!validation}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProducts;

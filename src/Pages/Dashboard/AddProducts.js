import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CAT, prod } from "../../Api/Api";
import { Axios } from "../../Api/axios";
import LoadingSpinner from "../../Components/LoadingSpinner";
import "./Dashboard.css";

function AddProducts() {
  const [loadin, setloadin] = useState(false);
  const [Categories, setCategories] = useState([]);
  const [images, setimages] = useState([]);
  const [sent, setsent] = useState(false);
  const [Id, seId] = useState();
  const [uploading, setuploading] = useState(0);
  const foucs = useRef("");
  const progress = useRef([]);
  const Ids = useRef([]);
  const [form, setfrom] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    discount: "",
    About: "",
  });

  const dummyData = {
    category: null,
    title: "dummy",
    description: "dummy",
    price: 222,
    discount: 0,
    About: "dummy",
    stock: 0,
  };

  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`${CAT}`)
      .then((response) => setCategories(response.data))
      .catch((err) => console.log(err));
  }, []);

  const validation = form.title !== "" && images.length > 0;

  async function handlesubmitform() {
    try {
      const res = await Axios.post(`${prod}/add`, dummyData);
      console.log(res);
      seId(res.data.id);
    } catch (error) {
      console.log(error);
    }
  }

  function handlechange(e) {
    setfrom({ ...form, [e.target.name]: e.target.value });
    setsent(true);

    if (sent !== true) {
      handlesubmitform();
    }
  }

  async function handlesubmitedit(e) {
    e.preventDefault();
    setloadin(true);
    try {
      await Axios.post(`${prod}/edit/${Id}`, form);
      navigate("/Dashboard/Products");
    } catch (err) {
      console.log(err);
      setloadin(false);
    }
  }

  async function handleimagesChange(e) {
    if (!Id) {
      console.log("Product ID not found yet");
      return;
    }

    setimages([...e.target.files]);
    const imageAsFiles = e.target.files;

    for (let i = 0; i < imageAsFiles.length; i++) {
      const data = new FormData();
      data.append("image", imageAsFiles[i]);
      data.append("product_id", Id);

      try {
        const res = await Axios.post("/product-img/add", data, {
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percent = Math.floor((loaded * 100) / total);

            if (progress.current[i]) {
              progress.current[i].style.width = `${percent}%`;
              progress.current[i].setAttribute("percent", `${percent}%`);
            }
          },
        });
        Ids.current[i] = res.data.id;
      } catch (err) {
        console.log(err);
      }
    }
  }

 async function handelimgdelete(index, img) {
  const findId = Ids.current[index];
  try {
    await Axios.delete(`/product-img/${findId}`);
  } catch (err) {
    console.log(err);
  } finally {
    setimages((prev) => prev.filter((item_, i) => i !== index));
    Ids.current = Ids.current.filter((item, i) => i !== index);
  }
}


  const CategoriesShow = Categories.map((item) => (
    <option key={item.id} value={item.id}>
      {item.title}
    </option>
  ));

  const imagesshow = images.map((img, key) => (
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
          onClick={() => handelimgdelete(key, img)}
          className="btn btn-danger ms-auto mb-auto"
        >
          Delete
        </button>
      </div>

      <div className="custom-progress mt-2">
        <span
          ref={(el) => (progress.current[key] = el)}
          percent={"0%"}
          style={{ width: "0%" }}
          className="inner-progress"
        ></span>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      {loadin ? <LoadingSpinner /> : null}
      <h1 className="mb-4">Add Product</h1>
      <form onSubmit={handlesubmitedit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={form.title}
            name="title"
            onChange={handlechange}
            required
            disabled={!sent}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-control"
            value={form.category}
            onChange={handlechange}
            required
            name="category"
          >
            <option disabled value="">
              Select category
            </option>
            {CategoriesShow}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={form.description}
            name="description"
            onChange={handlechange}
            disabled={!sent}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={form.price}
            name="price"
            onChange={handlechange}
            disabled={!sent}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Discount</label>
          <input
            type="number"
            className="form-control"
            value={form.discount}
            name="discount"
            onChange={handlechange}
            disabled={!sent}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">About</label>
          <textarea
            className="form-control"
            name="About"
            value={form.About}
            onChange={handlechange}
            disabled={!sent}
          />
        </div>
         
          <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            value={form.stock}
            name="stock"
            onChange={handlechange}
            disabled={!sent}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            ref={foucs}
            type="file"
            className="form-control"
            onChange={handleimagesChange}
            hidden
            multiple
          />
        </div>

        <div>
          <div
            onClick={() => foucs.current.click()}
            style={{ border: "3px dashed #ccc", cursor: "pointer" }}
            className="d-flex align-items-center gap-2 mb-3 justify-content-center flex-column w-100 rounded p-3"
          >
            <img alt="upload img" src="/imgs/upload-icon.png" width={"100px"} />
            <p className="text-muted">Click to upload images</p>
          </div>
        </div>

        <div>{imagesshow}</div>

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

export default AddProducts;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Axios } from "../../Api/axios";
import { useState, useEffect } from "react";
import TransformDate from '../../helpers/TransFormData';

function TableShow(props) {
  const currentUser = props.currentUser || { name: "" };

  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  // فلترة الداتا الأصلية بالتاريخ
  const filtredDataByDate = date.length !== 0 ? props.data.filter((item) => TransformDate(item.created_at) === date) : props.data;

  // فلترة نتائج السيرش بالتاريخ
  const filterSearchByDate = date.length !== 0 ?  filteredData.filter((item) => TransformDate(item.created_at) === date) : filteredData;

  // تحديد أي داتا تتعرض
  const showWhichData =  search.length > 0 ? filterSearchByDate : filtredDataByDate;

  async function getSearchedData() {
    try {
      const res = await Axios.post(
        `${props.searchLink}/search?title=${search}`
      );
      setFilteredData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setSearchLoading(false);
    }
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      search.length > 0 ? getSearchedData() : setSearchLoading(false);
    }, 500);
    return () => clearTimeout(debounce);
  }, [search]);

  const headerShow = (props.header || []).map((item) => (
    <th key={item.key}>{item.Name}</th>
  ));

  const datashow = (showWhichData || []).map((item) => (
    <tr key={item.id}>
      {(props.header || []).map((item2) => (
        <td key={item2.key}>
          {item2.key === "image" ? (
            <img width={"80px"} src={item[item2.key]} alt="img" />
          ) : item2.key === "images" ? (
            Array.isArray(item[item2.key])
              ? item[item2.key].map((img, idx) => (
                  <img
                    key={img.id || idx}
                    width="50px"
                    src={img.image}
                    alt="img"
                  />
                ))
              : null
          ) : item2.key === "created_at" || item2.key === "updated_at" ? (
            item[item2.key] ? TransformDate(item[item2.key]) : ""
          ) : item[item2.key] === "1995" ? (
            "Admin"
          ) : item[item2.key] === "2001" ? (
            "User"
          ) : item[item2.key] === "1996" ? (
            "Writer"
          ) : item[item2.key] === "1999" ? (
            "Products Manager"
          ) : (
            item[item2.key]
          )}
          {currentUser && item[item2.key] === currentUser.name && " (You)"}
        </td>
      ))}

      <td>
        <Link title="Edit" to={`/Dashboard/Products/Edit/${item.id}`}>
          <FontAwesomeIcon color="white" icon={faPen} />
        </Link>
        {currentUser && currentUser.name !== item.name && (
          <button
            title="Delete"
            className="btn"
            onClick={() => props.delete(item.id)}
          >
            <FontAwesomeIcon color="white" icon={faTrash} />
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <div className="container">
      <div className="m-4 d-flex justify-content-between align-items-center">
        <h1>{props.title}</h1>
        <Link className="btn btn-primary" to={`/Dashboard/${props.ToAdd}`}>
          Add {props.addBtn}
        </Link>
      </div>

      <div className="mb-3">
        <label htmlFor="searchInput" className="form-label">Search</label>
        <input
          type="search"
          className="form-control"
          id="searchInput"
          placeholder="Type to search..."
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchLoading(true);
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="searchDate" className="form-label">Search with date</label>
        <input
          type="date"
          className="form-control"
          id="searchDate"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="containertable mt-4">
        <table>
          <thead>
            <tr>
              {headerShow}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.Loading ? (
              <tr><td colSpan={12}>Loading...</td></tr>
            ) : searchLoading ? (
              <tr><td colSpan={12}>Searching...</td></tr>
            ) : (
              datashow
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableShow;

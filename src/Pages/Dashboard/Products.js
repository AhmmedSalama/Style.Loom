import TableShow from "../../Components/Dashboard/Table"
import { Axios } from "../../Api/axios";
import { useEffect, useState } from "react";
import {prod, prods} from "../../Api/Api";
import PaginatedItems from "./Reactpaginate";

function Products(){
  const [Products, setProducts] = useState([]);
  const [ limit, setlimit] = useState(10);
  const [ page, setpage ] = useState(1);
  const [ totaldata, settotaldata ] = useState();
  const [ Loading, setLoading ] = useState(false);
useEffect(() => {
  setLoading(true);
  Axios.get(`${prods}?limit=${limit}&page=${page}`)
    .then((response) => {
      setProducts(response.data.data);
      settotaldata(response.data.total);
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
}, [page, limit]);

const header = [
  {
    key: "id",
    Name: "ID",
  },
  { key: "images", Name: "Images"

  },
  {
    key: "title",
    Name: "Title",
  },
  {
    key: "description",
    Name: "Description",
  },
    {
    key: "price",
    Name: "Price",
  },
    {
    key: "rating",
    Name: "Rating",
  },
  {
    key:"created_at",
    Name: "Created",
  },
  {
    key:"updated_at",
    Name: "Updated_at",
  }
];

 async function handleDelete(id) {
    try {
      const res = await Axios.delete(`${prod}/${id}`);
      setProducts(prev => prev.filter((item)=>item.id !== id))
    } catch (err) {
      console.log(err);
    }
  }
    return(
      <div className="container">
        <TableShow searchLink={prod}  search={"title"} page={page} limit={limit}  header={header} data={Products} title={"Products"} ToAdd={"Products/Add"} addBtn={"Products"} delete={handleDelete}  />
        <PaginatedItems totaldata={totaldata} itemsPerPage={limit} data={Products} setpage={setpage} />
        </div>
    )
}

export default Products
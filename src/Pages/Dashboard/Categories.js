import TableShow from "../../Components/Dashboard/Table"
import { Axios } from "../../Api/axios";
import { useEffect, useState } from "react";
import {CAT, CATAdd} from "../../Api/Api";
import PaginatedItems from "./Reactpaginate";

function Categories(){
    const [Categories, setCategories] = useState([]);
    const [ limit, setlimit] = useState(10);
    const [ page, setpage ] = useState(1);
    const [ totaldata, settotaldata ] = useState();
    const [ Search, setSearch ] = useState();
    const [ Loading, setLoading ] = useState(false);
    
    useEffect(() => {
      setLoading(true);
    Axios
      .get(`${CAT}?limit=${limit}&page=${page}`)
      .then((response) => {setCategories(response.data.data)
        settotaldata(response.data.total);
      })
      .catch((err) => console.log(err)).finally(() => setLoading(false));
  }, [page ,limit]);
const header = [
  {
    key: "id",
    Name: "ID",
  },
  {
    key: "title",
    Name: "Title",
  },
  
  {
    key: "image",
    Name: "Image",
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
      const res = await Axios.delete(`${CATAdd}/${id}`);
      setCategories(prev => prev.filter((item)=>item.id !== id))
    } catch (err) {
      console.log(err);
    }
  }


    return(
      <div className="container"> 
        <TableShow search={"title"} searchLink={CATAdd} totaldata={totaldata} Loading={Loading} page={page} limit={limit} header={header} data={Categories} title={"Categories"} ToAdd={"Categories/Add"} addBtn={"Categories"} delete={handleDelete}  />
        <PaginatedItems totaldata={totaldata} itemsPerPage={limit} data={Categories} setpage={setpage} />
        </div>
    )
}

export default Categories
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, USERS, USER } from "../../Api/Api";
import Cookie from "cookie-universal";
import { Axios } from "../../Api/axios";
import TableShow from "../../Components/Dashboard/Table";
import PaginatedItems from "./Reactpaginate";

function Users() {
  const cookie = Cookie();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [usersUpdate, setUsersUpdate] = useState(false);
  const [limit, setlimit] = useState(10);
  const [page, setpage] = useState(1);

  useEffect(() => {
    Axios.get(`${USER}`)
      .then((res) => setCurrentUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.get(`${baseURL}/${USERS}`, {
      headers: {
        Authorization: "Bearer " + cookie.get("e-commerce"),
      },
    })
    .then((response) => setUsers(response.data.data))
    .catch((err) => console.log(err));
  }, [usersUpdate]);

  const header = [
    { key: "id", Name: "ID" },
    { key: "name", Name: "Name" },
    { key: "email", Name: "Email" },
    { key: "role", Name: "Role" },
  {
    key:"created_at",
    Name: "Created",
  },
  {
    key:"updated_at",
    Name: "Last Login",
  }
  ];

  async function handleDelete(id) {
    try {
      await Axios.delete(`${USER}/${id}`);
      setUsers(prev => prev.filter((item)=>item.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <TableShow 
        page={page} 
        limit={limit}  
        header={header} 
        data={users} 
        title={"Users Page"} 
        delete={handleDelete} 
        addBtn={"users"} 
        ToAdd={"users/AddUser"}  
        currentUser={currentUser} 
        search={"name"}
        searchLink={USER}
      />
      <PaginatedItems itemsPerPage={limit} data={users} setpage={setpage} />
    </div>
  );
}

export default Users;

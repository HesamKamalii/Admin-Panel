import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "./../../datas";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import "./UserList.css";
import { getDatabase, get, ref } from "firebase/database";
import app from "./../../config";

export default function UserList() {
  const [userDatas, setUserDatas] = useState([]);

  // const userDelete = (userID) => {
  //     setUserDatas(userDatas.filter((user)=> user.id!=userID))
  // }
  // const fetchData = async () => {

  // };
  // const usersRef = ref(database, "users");

  //    get(usersRef).then((res) => {
  //   let useArray = Object.entries(res.val()).map(([id, data]) => ({
  //     id,
  //     ...data,
  //   }));

  //   setUserDatas(useArray);
  //   console.log(userDatas);
  // });
 
  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "users");
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          setUserDatas(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const column = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First Name",
      width: 200,
      // renderCell: (params) => {
      //   return (
      //     <Link to="" className="link">
      //       <div className="userListUser">
      //         <img src={params.row.avatar} className="userListImg" />
      //         {params.row.userName}
      //       </div>
      //     </Link>
      //   );
      // },
    },
    { field: "lastName", headerName: "Last Name", width: 120 },
    // { field: "transaction", headerName: "TransAction", width: 160 },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListAction">
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userListEdit"> Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelet"
              // onClick={()=> userDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="userList">
      {/* <button onClick={fetchData}> Get data</button>
      <ul>
        {userDatas.map((user, index) => (
          <li key={index}>{user.firstName}</li>
        ))}
      </ul> */}
      <DataGrid
        rows={userDatas}
        columns={column}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        // pageSizeOptions={2}
      />
    </div>
  );
}

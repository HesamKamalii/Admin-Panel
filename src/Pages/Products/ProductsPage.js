import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { products } from "../../datas";
import { Link } from "react-router-dom";
// import FilteredNotes from "../useMemo/FilteredNotes";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./ProductsPage.css";

export default function UserLIst() {
  // use memo test 
  // const [newNote, setNewNote] = useState("");
  // const [notes, setNotes] = useState([]);

  // const addNewNote = () => {
  //   let newNoteObj = {
  //     id: notes.length + 1,
  //     title: newNote,
  //   };
  //   setNotes((pervnotes) => [...pervnotes, newNoteObj]);
  //   setNewNote('')
  // };
  //////////////////////////////////////////
  

  const [productsData, setProductsData] = useState(products);

  const productDelete = (productID) => {
    setProductsData(productsData.filter((product) => product.id != productID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => productDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className="userList">
        <DataGrid
          rows={productsData}
          columns={columns}
          disableSelectionOnClick
          pageSize={3}
          checkboxSelection
        />
      </div>
      {/* use memo test */}
      {/* <div className="usememo">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNewNote}>Add New Note</button>
        <h2>All notes</h2>
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              {note.id} - {note.title}
            </li>
          ))}
        </ul>
        <hr />
        <h2>includ js</h2>
        <FilteredNotes notesArray={notes} />
        <hr />
      </div> */}
    </>
  );
}

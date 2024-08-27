import React, { useState, useEffect } from "react";
import "./NewUsers.css";
import { getDatabase, get, ref } from "firebase/database";
import app from "./../../config";

export default function NewUsers() {
  const [users, setUser] = useState([]);
  useEffect(async () => {
    // const usersRef = ref(database, "users");
    // get(usersRef).then((res) => {
    //   let useArray = Object.entries(res.val()).map(([id, data]) => ({
    //     id,
    //     ...data,
    //   }));

    //   setUser(useArray);
    // });

  }, []);

  return <></>;
}

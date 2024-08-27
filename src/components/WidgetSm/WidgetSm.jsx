import React, { useState , useEffect} from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "./../../datas";
// import Axios  from "axios";


export default function WidgetSm() {
//  const [test , settest] = useState('')
 
  // Axios({
  //   method: 'post',
  //   url: 'https://test2-74197-default-rtdb.firebaseio.com/',
  //   data: {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   }
  // });
  return (
    <div className="WidgetSm">
      
      <span className="WidgetSmTitle">New Jion Members</span>
      <ul className="WidgetSmList">
        {newMembers.map((member) => (
          <li key={member.id} className="WidgetSmListItem">
            <img src={member.img} className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName"> {member.username}</span>
              <span className="widgetSmUserTitle"> {member.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className=" widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import "./TopBar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">Dashboard Project</span>
        </div>

        <div className="topright">
          <div className="topbariconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbariconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbariconContainer">
            <SettingsIcon />
          </div>
          <img src="Image\Avatar.png" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

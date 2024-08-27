import React from 'react'
import './SideBar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReportIcon from '@mui/icons-material/Report';
import WorkIcon from '@mui/icons-material/Work';
import {Link} from  'react-router-dom'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Dashboard
                </h3>
                <ul className="sidebarList">
                    <Link to= '/' className = 'link' >
                    <li className="sidebarListItem active">
                        <LineStyleIcon className = 'sidebarIcon' />
                        Home
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <TimelineIcon className = 'sidebarIcon' />
                        Analytics   
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className = 'sidebarIcon' />
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Quick Menu
                </h3>
                <ul className="sidebarList">
                    <Link to = '/users' className = 'link' >
                    <li className="sidebarListItem ">
                        <PermIdentityIcon className = 'sidebarIcon' />
                        Users
                    </li>
                    </Link>
                    <Link to ='/newUsers' className = 'link' >
                    <li className="sidebarListItem">
                        <PermIdentityIcon className = 'sidebarIcon' />
                        New User   
                    </li>
                    </Link >
                    <Link to= '/Products' className = 'link'  >
                    <li className="sidebarListItem">
                        <StorefrontIcon className = 'sidebarIcon' />
                        Products
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoneyIcon className = 'sidebarIcon' />
                        Transaction
                    </li>
                    <li className="sidebarListItem">
                        <BarChartIcon className = 'sidebarIcon' />
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Notifications
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <MailOutlineIcon className = 'sidebarIcon' />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeedIcon className = 'sidebarIcon' />
                        FeedBack   
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineIcon className = 'sidebarIcon' />
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                    Staff
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <WorkIcon className = 'sidebarIcon' />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className = 'sidebarIcon' />
                        Analytics   
                    </li>
                    <li className="sidebarListItem">
                        <ReportIcon className = 'sidebarIcon' />
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { logOut, selectUser } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(()=>{
            dispatch(logOut())
        })
    }
    return (
        <div className='header'>
            <div className="header_left">
                <IconButton>
                <MenuIcon/>
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="" />
            </div>
            <div className="header_middle">
                <SearchIcon/>
                <input placeholder='Search mail' type="text" />
                <ArrowDropDownIcon/>
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    );
};

export default Header;
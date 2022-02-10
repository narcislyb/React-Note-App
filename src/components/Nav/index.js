import React from 'react';
import { Link } from 'react-router-dom'
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import {Route, Switch} from "react-router-dom";

// const arr =["item1","item2","item3"]

const Nav = () => {
    return (
        <div>
        <Link to="/"><HomeIcon color="primary"/></Link>
        <Link to="/about"><InfoIcon color="primary"/></Link>
        <Link to="/settings"><SettingsIcon color="primary"/></Link>
        </div>
    )
};

export default Nav;

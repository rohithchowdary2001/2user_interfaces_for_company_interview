import React from "react";
import { Content } from '../horizontalmenu/Content.css';
import { BsSearch } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io5';
import { AiFillCaretDown } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useState } from "react";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

function GrowTransition(props) {
    return <Grow {...props} />;
}


const Contentmenu = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [isOne, setOne] = useState('');
    const handleOne = () => {
        alert("The page is under development...");
    };


    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
    });

    const handleClickk = (Transition) => () => {
        setState({
            open: true,
            Transition,
        });
    };

    const handleClosee = () => {
        setState({
            ...state,
            open: false,
        });
    };


    return (
        <div className="container-content">
            <div className="left-menu">
                <BsSearch className="search" size={18} />
                <input className="content-input" placeholder="Search jobs and applications..." />
            </div>
            <div className="right-menu-full">


                <Button onClick={handleClickk(GrowTransition)}> <div className="right-menu" style={{ cursor: "pointer" }}>
                    <IoNotificationsOutline size={25} style={{ marginRight: 20 }} color="black" />
                </div></Button>
                <Snackbar
                    open={state.open}
                    onClose={handleClosee}
                    TransitionComponent={state.Transition}
                    message="No new notifications"
                    key={state.Transition.name}
                />



                <div style={{ display: "flex", marginRight: "10px" }}>



                    <div>
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <img className="user-image" src={'https://media.licdn.com/dms/image/C4D03AQHMM0FPCwp8DA/profile-displayphoto-shrink_800_800/0/1649518221133?e=2147483647&v=beta&t=TIDBwOFeaNgGiMedJFa0Lu3imIXT_cXNLzICSB3BuGw'} alt="logo" width={20} style={{ marginRight: '10px' }} />
                            <div style={{ display: "grid", color: "black" }}>
                                <div>ROHITH YADLAPALLI</div>
                                <div>International</div>
                            </div>
                            <div style={{ marginRight: "10px", marginLeft: "10px" }}>
                                <AiFillCaretDown color="black" />
                            </div>
                        </Button>
                    </div>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>



                <div className="right-line" />
                <div className="logout-logo" onClick={handleOne} style={{ cursor: "pointer" }}>
                    <FiLogOut size={20} style={{ marginRight: "10px", }} />
                    <div>jobsite</div>
                </div>
            </div>



        </div>
    );
};
export default Contentmenu;

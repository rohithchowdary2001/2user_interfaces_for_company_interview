import React from 'react';
import { useState } from 'react';
import Horizontall from "../menubars/Horizontall.css";
import { GiBirdTwitter } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { BiSolidMessageSquare } from 'react-icons/bi';
import { RiNotificationBadgeFill } from 'react-icons/ri';
import { SlBadge } from 'react-icons/sl';
import Vertical from './Vertical';
import Rightcontent from '../contentss/Secondmain';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Horizontal() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };
    return (
        <div style={{ display: "grid" }}>
            <div className='harcontainer' style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <GiBirdTwitter color='navajowhite' size='40' style={{ margin: "10px 10px 10px 10px" }} />
                    <div style={{ color: "white", fontSize: "x-large" }}>AVIATE</div>
                </div>



                <div style={{ display: "flex", backgroundColor: "white" }} className='horsearch'>
                    <BsSearch
                        size={20}
                        style={{ margin: "0px 10px 0px 10px", transform: isInputFocused ? 'rotate(80deg)' : 'rotate(0deg)' }}
                    />
                    <input
                        placeholder='Type here for search'
                        style={{ width: "550px", height: "40px" }}
                        className='horsearchitem'
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </div>



                <div>
                    <BiSolidMessageSquare color='white' size={25} style={{ margin: "0px 10px 0px 10px" }} />
                    <RiNotificationBadgeFill color='white' size={25} style={{ margin: "0px 10px 0px 10px" }} />
                    <SlBadge color='white' size={25} style={{ margin: "0px 10px 0px 10px" }} />
                </div>
                <div style={{ display: "flex", marginRight: "20px" }}>
                    <img className="user-image" src={'https://media.licdn.com/dms/image/C4D03AQHMM0FPCwp8DA/profile-displayphoto-shrink_800_800/0/1649518221133?e=2147483647&v=beta&t=TIDBwOFeaNgGiMedJFa0Lu3imIXT_cXNLzICSB3BuGw'} alt="logo" width={20} style={{ marginRight: '10px' }} />
                    <div>
                        <div style={{ color: "white" }}>ROHITH YADLAPALLI</div>

                        <Button onClick={handleClickOpen}>
                            <div style={{ backgroundColor: "white", width: "auto", textAlign: "center", borderRadius: "5px", color: "black" }}>EDIT PROFILE</div>
                        </Button>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle>{"Profile Edit?"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    At this moment you are unable to change any details kindly contact admin.
                                    Thank You!
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Disagree</Button>
                                <Button onClick={handleClose}>Agree</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <Vertical />
                <Rightcontent />
            </div>
        </div>
    )
};

export default Horizontal;
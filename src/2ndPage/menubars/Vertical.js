// import React from 'react';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { RxDashboard } from 'react-icons/rx';
// import { PiSuitcaseSimpleLight } from 'react-icons/pi';
// import { FiMessageSquare } from 'react-icons/fi';
// import { AiOutlineCalendar } from 'react-icons/ai';
// import { FiLogOut } from 'react-icons/fi';
// import Vercont from "./Vercont.css";

// function Vertical() {
//     return (
//         <div style={{ display: "grid" }} className='vercont'>
//             <div className='varitemsmain'>
//                 <AiOutlineMenu size={30} color='white' />
//             </div>
//             <div className='varitems'>
//                 <RxDashboard size={20} color='white' style={{alignItems:"center"}}/>
//                 <div>Dashboard</div>
//             </div>
//             <div className='varitems'>
//                 <PiSuitcaseSimpleLight size={20} color='white' />
//                 <div>My Jobs</div>
//             </div>
//             <div className='varitems'>
//                 <FiMessageSquare size={20} color='white' />
//                 <div>Messages</div>
//             </div>
//             <div className='varitems'>
//                 <AiOutlineCalendar size={20} color='white' />
//                 <div>Upcoming Events</div>
//             </div>
//             <div>HELP</div>
//             <div className='varitems'>
//                 <FiLogOut size={30} color='white' />
//             </div>
//         </div>
//     )
// }

// export default Vertical

import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import { PiSuitcaseSimpleLight } from 'react-icons/pi';
import { FiMessageSquare } from 'react-icons/fi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import './Vercont.css';



import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Vermenu = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        if (selectedButton === buttonName) {
            setSelectedButton(null);
        } else {
            setSelectedButton(buttonName);
        }
    };

    const isButtonSelected = (buttonName) => {
        return selectedButton === buttonName ? "selected" : "";
    };

    const buttonBackgroundColor = (buttonName) => {
        return selectedButton === buttonName ? "rgb(124, 145, 165)" : "transparent";
    };



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="container">
            <AiOutlineMenu size={30} style={{ margin: "50px 30px 50px 30px", cursor: "pointer" }} />
            <div>
                <button
                    className={`buttonver ${isButtonSelected("dashboard")}`}
                    style={{ backgroundColor: buttonBackgroundColor("dashboard") }}
                    onClick={() => handleButtonClick("dashboard")}
                >
                    <RxDashboard size={20} style={{ margin: "0px 27px 0px 27px" }} />
                    <div>Dashboard</div>
                </button>

                <button
                    className={`buttonver ${isButtonSelected("myjobs")}`}
                    style={{ backgroundColor: buttonBackgroundColor("myjobs") }}
                    onClick={() => handleButtonClick("myjobs")}
                >
                    <PiSuitcaseSimpleLight size={20} style={{ margin: "0px 27px 0px 27px" }} />
                    <div>My Jobs</div>
                </button>

                <button
                    className={`buttonver ${isButtonSelected("messages")}`}
                    style={{ backgroundColor: buttonBackgroundColor("messages") }}
                    onClick={() => handleButtonClick("messages")}
                >
                    <FiMessageSquare size={20} style={{ margin: "0px 27px 0px 27px" }} />
                    <div>Messages</div>
                </button>

                <button
                    className={`buttonver ${isButtonSelected("events")}`}
                    style={{ backgroundColor: buttonBackgroundColor("events") }}
                    onClick={() => handleButtonClick("events")}
                >
                    <AiOutlineCalendar size={20} style={{ margin: "0px 27px 0px 27px" }} />
                    <div>Upcoming</div>
                    <div>Events</div>
                </button>
            </div>
            <div style={{ margin: "145px 0px 0px 0px", textAlign: "center" }}>


                <Button onClick={handleClickOpen} >
                    <div className={`helping ${selectedButton === "help" ? "selected" : ""}`}>
                        HELP
                    </div>      </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Help</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please write your question here we will solve shortly,thanks.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            
                            id="name"
                            label="Write your question here"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </Dialog>

                <button
                    className={`buttonver ${isButtonSelected("logout")}`}
                    style={{
                        backgroundColor: buttonBackgroundColor("logout"),
                        borderColor: "transparent"
                    }}
                    onClick={() => handleButtonClick("logout")}
                >
                    <FiLogOut size={20} style={{ margin: "0px 27px 0px 27px" }} />
                    <div>Logout</div>
                </button>
            </div>
        </div>
    );
};

export default Vermenu;

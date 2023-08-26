import React from 'react';
import Userdata from './Userdata';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Leftcontentt from "./Leftcontentt.css";
import { CiLocationOn } from 'react-icons/ci';
import { AiFillCaretDown } from 'react-icons/ai';
import { MdFilterList } from 'react-icons/md';
import { MdCancel } from 'react-icons/md';
import { TbSquareRoundedNumber6Filled } from 'react-icons/tb';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


import Rightcontent from './Rightcontent';

function Leftcontent() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEla, setAnchorEla] = React.useState(null);
    const opena = Boolean(anchorEla);
    const handleClicka = (event) => {
        setAnchorEla(event.currentTarget);
    };
    const handleClosea = () => {
        setAnchorEla(null);
    };


    const [buttonColor1, setButtonColor1] = useState('white');

    const handleClickk1 = () => {
      // Toggle the button color based on the current color
      setButtonColor1(prevColor => (prevColor === 'white' ? '#d9dadb' : 'white'));
    };
    const [buttonColor2, setButtonColor2] = useState('white');

    const handleClickk2 = () => {
      // Toggle the button color based on the current color
      setButtonColor2(prevColor => (prevColor === 'white' ? '#d9dadb' : 'white'));
    };
    const [buttonColor3, setButtonColor3] = useState('white');

    const handleClickk3 = () => {
      // Toggle the button color based on the current color
      setButtonColor3(prevColor => (prevColor === 'white' ? '#d9dadb' : 'white'));
    };
    const [buttonColor4, setButtonColor4] = useState('white');

    const handleClickk4 = () => {
      // Toggle the button color based on the current color
      setButtonColor4(prevColor => (prevColor === 'white' ? '#d9dadb' : 'white'));
    };
    const [buttonColor5, setButtonColor5] = useState('white');

    const handleClickk5 = () => {
      // Toggle the button color based on the current color
      setButtonColor5(prevColor => (prevColor === 'white' ? '#d9dadb' : 'white'));
    };

 const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    return (
        <div style={{ display: "flex" }}>
            <div className='leftcontentmain'>
                <div style={{ fontSize: "x-large", padding: "25px 0px 10px 50px" }}> Search for jobs</div>
                <div style={{ display: "flex" }}>

                <div style={{ display: "flex", backgroundColor: "white" , marginLeft: "50px"}} className='horsearchh'>
                    <BsSearch
                        size={20}
                        style={{ margin: "0px 10px 0px 10px", transform: isInputFocused ? 'rotate(80deg)' : 'rotate(0deg)' }}
                    />
                    <input
                        placeholder='Type here for search'
                        style={{ width: "550px", height: "40px" }}
                        className='horsearchitemm'
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </div>
                    <div style={{ margin: "0px 20px 0px 20px" }}>
                        <div style={{ backgroundColor: "white", borderRadius: "5px", height: "40px", textAlign: "center", alignItems: "center" }}>

                            <div>
                                <Button
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <CiLocationOn size={25} color='black' />
                                    <div style={{ display: "grid", color: "black" }}>
                                        <div>Select location</div>
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
                                <MenuItem onClick={handleClose}>Asia</MenuItem>
                                <MenuItem onClick={handleClose}>Europe</MenuItem>
                                <MenuItem onClick={handleClose}>USA</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div style={{ margin: "0px 20px 0px 20px" }}>
                        <div style={{ backgroundColor: "white", borderRadius: "5px", height: "40px", textAlign: "center", alignItems: "center" }}>

                            <div>
                                <Button
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClicka}
                                >
                                    <MdFilterList size={25} color='black' />
                                    <div style={{ display: "grid", color: "black" }}>
                                        <div>Filters</div>
                                    </div>
                                    <div style={{ marginRight: "10px", marginLeft: "10px" }}>
                                        <TbSquareRoundedNumber6Filled size={23} color="black" />
                                    </div>
                                </Button>
                            </div>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEla}
                                open={opena}
                                onClose={handleClosea}
                                TransitionComponent={Fade}
                            >
                                <FormControlLabel required control={<Checkbox />} label="Development" /> <br />
                                <FormControlLabel required control={<Checkbox />} label="Full Stack Development" /> <br />
                                <FormControlLabel required control={<Checkbox />} label="Testing" /> <br />
                                <FormControlLabel required control={<Checkbox />} label="Networking" /> <br />
                                <FormControlLabel required control={<Checkbox />} label="Support" /> <br />
                                <FormControlLabel required control={<Checkbox />} label="Devops" />
                            </Menu>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                <button
                        style={{
                            display: 'flex',
                            backgroundColor: buttonColor1, 
                            width: '110px',
                            height: '40px',
                            textAlign: 'center',
                            alignItems: 'center',
                            borderRadius: '5px',
                            margin: '20px 30px 20px 50px',
                            borderRadius: '50px'
                        }}
                        onClick={handleClickk1}
                    >
                        <MdCancel size={20} style={{ marginRight: '10px' }} />
                        <div>Pune</div>
                    </button>
                    <button
                        style={{
                            display: 'flex',
                            backgroundColor: buttonColor2, 
                            width: '110px',
                            height: '40px',
                            textAlign: 'center',
                            alignItems: 'center',
                            borderRadius: '5px',
                            margin: '20px 30px 20px 30px',
                            borderRadius: '50px'
                        }}
                        onClick={handleClickk2}
                    >
                        <MdCancel size={20} style={{ marginRight: '10px' }} />
                        <div>Hyderabad</div>
                    </button>
                    <button
                        style={{
                            display: 'flex',
                            backgroundColor: buttonColor3, 
                            width: '110px',
                            height: '40px',
                            textAlign: 'center',
                            alignItems: 'center',
                            borderRadius: '5px',
                            margin: '20px 30px 20px 30px',
                            borderRadius: '50px'
                        }}
                        onClick={handleClickk3}
                    >
                        <MdCancel size={20} style={{ marginRight: '10px' }} />
                        <div>Delhi</div>
                    </button>
                    <button
                        style={{
                            display: 'flex',
                            backgroundColor: buttonColor4, 
                            width: '110px',
                            height: '40px',
                            textAlign: 'center',
                            alignItems: 'center',
                            borderRadius: '5px',
                            margin: '20px 30px 20px 30px',
                            borderRadius: '50px'
                        }}
                        onClick={handleClickk4}
                    >
                        <MdCancel size={20} style={{ marginRight: '10px' }} />
                        <div>Chennai</div>
                    </button>



                    <button
                        style={{
                            display: 'flex',
                            backgroundColor: buttonColor5, 
                            width: '110px',
                            height: '40px',
                            textAlign: 'center',
                            alignItems: 'center',
                            borderRadius: '5px',
                            margin: '20px 30px 20px 30px',
                            borderRadius: '50px'
                        }}
                        onClick={handleClickk5}
                    >
                        <MdCancel size={20} style={{ marginRight: '10px' }} />
                        <div>Noida</div>
                    </button>
                </div>
                <Userdata />
            </div>
            <Rightcontent />
        </div>
    )
}

export default Leftcontent;
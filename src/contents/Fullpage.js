import React from 'react';
import Left from './Left';
import Right from './Right.js';
import Lefts from "./Lefts.css";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Fullpage() {
  const [isOne, setOne] = useState(true);
  const [isTwo, setTwo] = useState('');

  const handleOne = () => {
    setOne(!isOne);
    setTwo(false);
  };

  const handleTwo = () => {
    setTwo(!isTwo);
    setOne(false);
  };
  return (
    <div style={{ display: "flex" }}>
      {/* <Left/> */}

      <div className='leftcontainer'>
        <div className='appli'><b>Applications</b></div>
        <div className='fil'><b>Filters</b></div>
        <div style={{ margin: "20px 0px 20px 30px" }}>
          <FormControlLabel
            value="end"
            control={<Switch color="success" />}
            label="Show rejected applications"
            labelPlacement="end"
            onClick={handleOne}
            checked={isOne}
          />
          <br />
          <FormControlLabel
            value="end"
            control={<Switch color="success" />}
            label="Show only subscribed applications"
            labelPlacement="end"
            onClick={handleTwo}
            checked={isTwo}
          />
        </div>
        <div style={{ marginLeft: "30px", }}>
          <div style={{ margin: "10px 0px 0px 0px",cursor:"pointer" }}> <AiFillPlusCircle size={20} style={{ marginRight: "10px", display: "inline-flex" }} /><b>JOBS</b></div>
          <div style={{ margin: "10px 0px 0px 0px",cursor:"pointer" }}> <AiFillPlusCircle size={20} style={{ marginRight: "10px", display: "inline-flex" }} /><b>JOBS DOMAIN</b></div>
          <div style={{ margin: "10px 0px 0px 0px" ,cursor:"pointer"}}> <AiFillPlusCircle size={20} style={{ marginRight: "10px", display: "inline-flex" }} /><b>SCORE</b></div>
          <div style={{ margin: "10px 0px 0px 0px",cursor:"pointer" }}> <AiFillPlusCircle size={20} style={{ marginRight: "10px", display: "inline-flex" }} /><b>APPLICATION DATE</b></div>
          <div style={{ margin: "10px 0px 0px 0px",cursor:"pointer" }}> <AiFillPlusCircle size={20} style={{ marginRight: "10px", display: "inline-flex" }} /><b>TAGS</b></div>
        </div>
      </div>
      {isOne && (<Right />)}
      {isTwo && (<Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>)}
    </div>
  )
}

export default Fullpage
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Vermenu from './firstpage/verticalmenu/Verticalmenu';
import Content from './firstpage/horizontalmenu/Content';
import Fullpage from './contents/Fullpage';
import Verticalmenu from '../src/firstpage/verticalmenu/Verticalmenu.css';
import { CiBrightnessUp } from 'react-icons/ci';
import { VscTwitter } from 'react-icons/vsc';
import { GoInbox } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';
import { VscGraph } from 'react-icons/vsc';
import { FcStatistics } from 'react-icons/fc';
import { LiaBrushSolid } from 'react-icons/lia';
import { FiSettings } from 'react-icons/fi';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


function App() {
  const [isOne, setOne] = useState(true);
  const [isTwo, setTwo] = useState('');
  const [fiUsersColor, setFiUsersColor] = useState('black');
  const [inboxColor, setInboxColor] = useState('black');

  const handleOne = () => {
    setOne(!isOne);
    setTwo(false);
    setFiUsersColor(isOne ? 'black' : 'green'); // Change color on click
  };

  const handleTwo = () => {
    setTwo(!isTwo);
    setOne(false);
    setInboxColor(isTwo ? 'black' : 'blue'); // Change color on click
  };

  return (
    <div className='containerapp'>
      <div className="container">
        <div className="logo">
          <VscTwitter size={30} />
        </div>
        <div className="line" />
        <div className="menuitems">
          <GoInbox size={20} style={{ marginTop: 30, cursor: "pointer", color: inboxColor }} onClick={handleTwo} checked={isTwo} />
          <FiUsers size={20} style={{ marginTop: 20, cursor: "pointer", color: fiUsersColor }} onClick={handleOne} checked={isOne} />
          <VscGraph size={20} style={{ marginTop: 20, cursor: "pointer", }} onClick={handleTwo} checked={isTwo} />
          <FcStatistics size={20} style={{ marginTop: 20, cursor: "pointer" }} onClick={handleTwo} checked={isTwo} />
          <LiaBrushSolid size={20} style={{ marginTop: 20, cursor: "pointer" }} onClick={handleTwo} checked={isTwo} />
          <FiSettings size={20} style={{ marginTop: 20, cursor: "pointer" }} onClick={handleTwo} checked={isTwo} />
        </div>
      </div>
      <div className='cont'>
        <Content />
        {isOne && (<Fullpage />)}
        {isTwo && (<Box sx={{ width: "100%" }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <p>Try After Some Time...</p>
        </Box>
        )}
      </div>
    </div>
  );
}

export default App;

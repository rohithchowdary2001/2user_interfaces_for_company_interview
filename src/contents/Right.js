//This code is for local storage
// import React, { useState, useEffect } from 'react';
// import { BsPersonFillAdd } from 'react-icons/bs';
// import { BiSolidHappyHeartEyes } from 'react-icons/bi';
// import { CiMenuKebab } from 'react-icons/ci';
// import { IoMdTime } from 'react-icons/io';

// import './Rights.css';
// import { Datamenu, addUser } from './data'; // Update import statement

// import AddUserForm from './AddUserForm'; // Import the AddUserForm component

// export default function Right() {
//   const [dataList, setDataList] = useState([]);
//   const [selectedCount, setSelectedCount] = useState(0);
//   const [showAddForm, setShowAddForm] = useState(false);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('userList')) || [];
//     setDataList(storedData);
//   }, []);

//   const handleCheckboxToggle = () => {
//     setSelectedCount(prevCount => prevCount + 1);
//   };

//   const handleCheckboxUncheck = () => {
//     setSelectedCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
//   };

//   const totalCheckboxes = dataList.length;

//   const handleAddUser = (newUserData) => {
//     setDataList([...dataList, newUserData]);
//     setShowAddForm(false);
//   };


//   return (
//     <div className='rightcon'>
//       <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 60px 20px 30px' }}>
//         <div>showing <b>{selectedCount}</b> results from {totalCheckboxes} total</div>
//         <div>
//           <BsPersonFillAdd size={30} color='green' onClick={() => setShowAddForm(true)} />
//         </div>
//       </div>

//       {showAddForm && <AddUserForm onAddUser={handleAddUser} />}

//       <div style={{ borderRadius: '20px' }}>
//         {dataList.map(item => (
//           <div key={item.id} className="user-table">
//             <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'white', height: 'auto', width: 'auto', padding: '10px 10px 10px 10px' }} className='tableval'>
//               <input type='checkbox' onChange={event => event.target.checked ? handleCheckboxToggle() : handleCheckboxUncheck()} />
//               <img src={item.img} alt="user" className='imageuser' />
//               <div style={{ display: 'grid' }}>
//                 <div style={{ margin: '0px 50px 0px 0px' }}>
//                   {item.name}<IoMdTime />{item.time}
//                 </div>
//                 <div>{item.role}</div>
//               </div>
//               <div>{item.exp}</div>
//               <div style={{ display: 'grid' }}>
//                 <div>{item.sti}</div>
//                 <div>{item.per}</div>
//               </div>
//               <div><CiMenuKebab /></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { BsPersonFillAdd } from 'react-icons/bs';
import { BiSolidHappyHeartEyes } from 'react-icons/bi';
import { CiMenuKebab } from 'react-icons/ci';
import { IoMdTime } from 'react-icons/io';
import './Rights.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Datamenu, addUser } from './data'; // Update import statement

import AddUserForm from './AddUserForm'; // Import the AddUserForm component

export default function Right() {
  const [dataList, setDataList] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);


  useEffect(() => {
    setDataList(Datamenu);
  }, []);

  const handleCheckboxToggle = () => {
    setSelectedCount(prevCount => prevCount + 1);
  };

  const handleCheckboxUncheck = () => {
    setSelectedCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const totalCheckboxes = dataList.length;

  const handleAddUser = (newUserData) => {
    addUser(newUserData);
    setDataList([...dataList]);
    setShowAddForm(false);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='rightcon'>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 60px 20px 30px' }}>
        <div>showing <b>{selectedCount}</b> results from {totalCheckboxes} total</div>
        <div>
          <BsPersonFillAdd size={30} color='green' onClick={() => setShowAddForm(true)} style={{ cursor: "pointer" }} />
        </div>
      </div>

      {showAddForm && <AddUserForm onAddUser={handleAddUser} />}

      <div style={{ borderRadius: '20px', height: "70vh" }}>
        {dataList.map(item => (
          <div key={item.id} className="user-table">
            <div style={{ display: 'flex',flexShrink:"0", backgroundColor: '#f7f7f7', justifyContent: "space-between", height: 'auto', width: 'auto', padding: '10px 10px 10px 10px', marginLeft: "30px" }} className='tableval'>
              <input type='checkbox' onChange={event => event.target.checked ? handleCheckboxToggle() : handleCheckboxUncheck()} style={{ marginRight: 40, cursor: "pointer" }} />
              <img src={item.img} alt="user" className='imageuser' style={{ marginRight: "70px"}} />
              <div style={{ display: 'grid', width: "300px" }}>
                <div style={{ margin: '0px 50px 0px 0px' }}>
                  {item.name}<IoMdTime style={{ marginLeft: "5px", marginRight: "5px" }} />{item.time}
                </div>
                <div>{item.role}</div>
              </div>
              <div style={{ alignItems: "center" ,width:'50px'}}>{item.exp}</div>
              <div style={{ display: 'grid' }}>
                <div >{item.sti}</div>
                <div>{item.per}</div>
              </div>
              <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <div style={{ marginRight: "20px" }}><CiMenuKebab style={{color:"black"}}/></div>
              </Button>
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
                <MenuItem onClick={handleClose}>Update Info</MenuItem>
                <MenuItem onClick={handleClose}>Edit Info</MenuItem>
              </Menu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Modal from 'react-modal';
export default function AddUserForm({ onAddUser }) {
  const [newUser, setNewUser] = useState({
    img: '',
    name: '',
    time: '',
    role: '',
    exp: '',
    per: '',
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(newUser);
    setModalIsOpen(false);
    setNewUser({
      img: '',
      name: '',
      time: '',
      role: '',
      exp: '',
      per: '',
    });
  };

  return (
    <div>
      <button className='booking' onClick={() => setModalIsOpen(true)} style={{ backgroundColor: "transparent", borderColor: "black", cursor: "pointer", height: "30px", borderRadius: "20px", marginBottom: "10px", marginLeft: "30px" }}>Add User</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Add User Modal"
      >
        <h2>Add User</h2>

        <form onSubmit={handleSubmit}>
          <input type='file' name='img' placeholder='Image URL' value={newUser.img} onChange={handleInputChange} required style={{margin:"0px 5px 0px 5px"}}/>
          <input type='text' name='name' placeholder='Name' value={newUser.name} onChange={handleInputChange} required style={{margin:"0px 5px 0px 5px"}}/>
          <input type='date' name='time' placeholder='Time' value={newUser.time} onChange={handleInputChange} required style={{margin:"0px 5px 0px 5px"}}/>
          <input type='text' name='role' placeholder='Role' value={newUser.role} onChange={handleInputChange} required style={{margin:"0px 5px 0px 5px"}}/>
          <select name='exp' value={newUser.exp} onChange={handleInputChange} required style={{margin:"0px 5px 0px 5px"}}>
            <option value=''>Select Experience</option>
            <option value='new'>Fresher</option>
            <option value='experienced'>Experienced</option>
          </select>
          <input type='number' name='per' placeholder='Percentage' value={newUser.per} onChange={handleInputChange} required style={{margin:"0px 5px 0px 5px"}}/>
          <button type='submit'>Add User</button>
          <button onClick={() => setModalIsOpen(false)} style={{margin:"0px 5px 0px 5px"}}>Cancel </button>
        </form>
      </Modal>
    </div>
  );
}







// import React, { useState } from 'react';

// export default function AddUserForm({ onAddUser }) {
//   const [newUser, setNewUser] = useState({
//     img: '',
//     name: '',
//     time: '',
//     role: '',
//     exp: '',
//     per: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser(prevUser => ({ ...prevUser, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddUser(newUser);
//     setNewUser({
//       img: '',
//       name: '',
//       time: '',
//       role: '',
//       exp: '',
//       per: '',
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type='file' name='img' placeholder='Image URL' value={newUser.img} onChange={handleInputChange} required />
//       <input type='text' name='name' placeholder='Name' value={newUser.name} onChange={handleInputChange} required />
//       <input type='date' name='time' placeholder='Time' value={newUser.time} onChange={handleInputChange} required />
//       <input type='text' name='role' placeholder='Role' value={newUser.role} onChange={handleInputChange} required />
//       <select name='exp' value={newUser.exp} onChange={handleInputChange} required>
//         <option value=''>Select Experience</option>
//         <option value='new'>New</option>
//         <option value='experienced'>Experienced</option>
//       </select>
//       <input type='number' name='per' placeholder='Percentage' value={newUser.per} onChange={handleInputChange} required />
//       <button type='submit'>Add User</button>
//     </form>
//   );
// }







//Local storage use this code

// import React, { useState } from 'react';

// export default function AddUserForm({ onAddUser }) {
//   const [newUser, setNewUser] = useState({
//     img: '',
//     name: '',
//     time: '',
//     role: '',
//     exp: '',
//     per: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser(prevUser => ({ ...prevUser, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddUser(newUser);

//     const existingData = JSON.parse(localStorage.getItem('userList')) || [];
//     existingData.push(newUser);
//     localStorage.setItem('userList', JSON.stringify(existingData));

//     setNewUser({
//       img: '',
//       name: '',
//       time: '',
//       role: '',
//       exp: '',
//       per: '',
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type='file' name='img' placeholder='Image URL' value={newUser.img} onChange={handleInputChange} required />
//       <input type='text' name='name' placeholder='Name' value={newUser.name} onChange={handleInputChange} required />
//       <input type='date' name='time' placeholder='Time' value={newUser.time} onChange={handleInputChange} required />
//       <input type='text' name='role' placeholder='Role' value={newUser.role} onChange={handleInputChange} required />
//       <select name='exp' value={newUser.exp} onChange={handleInputChange} required>
//         <option value=''>Select Experience</option>
//         <option value='new'>New</option>
//         <option value='experienced'>Experienced</option>
//       </select>
//       <input type='text' name='per' placeholder='Percentage' value={newUser.per} onChange={handleInputChange} required />
//       <button type='submit'>Add User</button>
//     </form>
//   );
// }

import React from 'react';
import data from './Data';
import Userdataa from "./Userdataa.css";
import Rightcontent from './Rightcontent';

const Userdata = () => {
  return (
    <div style={{display:"flex"}}>
      <div>
      <h1 style={{ marginLeft: "50px" }}>My Jobs</h1>
      <table className='table-values' style={{ marginLeft: "50px"}}>
      <div style={{fontSize:"xx-large",marginBottom:'20px'}}>Applications</div>
        {data.map(item => (
          <tr key={item.id}>
            <div className='datatableuser' style={{ display: "flex", justifyContent: "space-between", width: "1000px", backgroundColor: "white", padding: "10px 20px 10px 20px", alignItems: "center", textAlign: "center", borderRadius: "30px" }}>
              <div style={{ display: "flex" }}>
                <img src={item.img} alt="user" className='imageuserr' />
                <div style={{display:"grid"}}>
                  <div>
                    <td><b>{item.role}</b></td>
                    <div>
                      <td>{item.company}</td>
                      <td>{item.location}</td>
                    </div>
                    <td>{item.place}</td>
                  </div>
                  
                </div>
               
              </div>
              <div style={{display:"grid"}}>
                <div style={{display:"flex"}}>
                <td><b>${item.salary1}-</b></td>
                <td><b>${item.salary2}</b></td>
                </div>
                <td>{item.pay}</td>
              </div>
              <td className='statusdata'>{item.status}</td>
            </div>
          </tr>
        ))}

      </table>
      </div>
      {/* <Rightcontent /> */}
    </div>
  );
};

export default Userdata;

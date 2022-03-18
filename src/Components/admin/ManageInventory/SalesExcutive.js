import SideMenu from "../../Menu/SideMenu";
import { Modal } from "rsuite";

import { useState } from "react";

const SalesExcutive = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="body-wrapper">
        <div className="left">
          <SideMenu />
        </div>
        <div className="right">
        <h5 style={{ textAlign: "center" }}>Sale Excutives</h5>
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            Add New Sales Excutive
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Experience(in Years)</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        
      </div>
      

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Add Excutive Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-wrapper">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            ></input>
          </div>
          <div className="input-wrapper">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lasttName"
              placeholder="Last Name"
            ></input>
          </div>
          <div className="input-wrapper">
            <label for="DOB">DOB</label>
            <input
              type="date"
              id="DOB"
              name="DOB"
              placeholder="dd-mm-yyyy"
            ></input>
          </div>
          <div className="input-wrapper">
            <label for="Gender">Gender</label>
            <input type="text" id="Gender" name="Gender" placeholder=""></input>
          </div>
          <div className="input-wrapper">
            <label for="quantity">Experience</label>
            <input
              type="number"
              id="Experience"
              name="Experience"
              min="0"
            ></input>
          </div>
          
          <div className="medicine-wrapper">
            <button className="btn">Add to the Team</button>
            
          </div>
          
         
        </Modal.Body>
        
      </Modal>
      
    </>
  );
};

export default SalesExcutive;

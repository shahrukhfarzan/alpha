import { useState } from "react";
import { Modal } from "rsuite";
import "./Inventory.css";
import SideMenu from "../../Menu/SideMenu";

const Inventory = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      {/* <div className="Inventory-container">
                <h3>Inventory</h3>
                <div>
                    <button>ADD NEW MEDICINE</button>
                </div>
                <div className="Inventory-detail">
                    <p>Medicine Name</p>
                    <p>ManufacturerName</p>
                    <p>Price</p>
                    <p>Stock</p>
                    <p>Discount</p>
                    </div>
                
                </div> */}
      <div className="body-wrapper">
        <div className="left">
          <SideMenu />
        </div>
        <div className="right">
            <h5 style={{ textAlign: "center" }}>Inventory</h5>
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            Add New Medicine
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Manufacturer</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Discount(%)</th>
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
          <Modal.Title>Add Medicine Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="medicine-wrapper">
            <div className="input-wrapper">
              <label for="medicine-name">Medicine Name</label>
              <input
                type="text"
                id="medicine-name"
                name="medcine-name"
                placeholder="Medicine Name"
              ></input>
            </div>
            <div className="input-wrapper">
              <label for="Manufacturer">Manufacturer</label>
              <input
                type="text"
                id="Manufacturer"
                name="Manufacturer"
                placeholder="Manufacturer"
              ></input>
            </div>
            <div className="input-wrapper">
              <label for="quantity">Price</label>
              <input type="number" id="quantity" name="quantity" min="0" />
            </div>

            <div className="input-wrapper">
              <label for="quantity">Stock</label>
              <input type="number" id="quantity" name="quantity" min="0" />
            </div>
            <div className="input-wrapper">
              <label for="discount">Discount</label>
              <input type="number" id="discount" name="discount" />
            </div>

            <button className="btn">Add to Inventory</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Inventory;

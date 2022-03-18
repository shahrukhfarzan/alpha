import SideMenu from "../../Menu/SideMenu";
import "./Createorder.css";
const CreateOrder = () => {
  return (
    <>
      <div className="body-wrapper">
        <div className="left">
          <SideMenu />
        </div>
        <div className="right">
          <h5 style={{ textAlign: "center" }}>Create Order</h5>
          <div className="order-body">
            <div className="order-body-left">
              <div className="input-wrapper">
              <label for="Medicine">Medicine</label>
                <input type="text" id="Medicine" name="Medicine"></input>
              </div>
              <div className="input-wrapper">
                  <label for="quantity"></label>
                <input type="number" id="quantity" name="quantity" min="0"></input>
                <button className="btn">click</button>
              </div>
            </div>
            <div className="order-body-right">
              <div className="order-form">
                <div className="contact-row">
                <label for="customer-name">Customer Name</label>
                  <input type="text" id="customer-name" name="customer-name" placeholder="Customer Name"></input>
                  <label for="customer-contact-number">Customer Contact Number</label>
                  <input type="text" id="customer-contact-number" name="customer-contact-number" placeholder="Customer Contact Number"></input>
                </div>
                <div className="contact-detail">
                  <table className="order-table">
                    <thead>
                      <tr>
                        <td>Medcine Name</td>
                        <td>QTY</td>
                        <td>Price(per unit)</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Total</td>
                        <td></td>
                        
                      </tr>
                    </tbody>
                  </table>
                  <div className="medicine-wrapper">
                    <button className="btn">Create Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateOrder;

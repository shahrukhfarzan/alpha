import { NavLink } from "react-router-dom";
import "./SideMenu.css";
const SideMenu = () => {
  return (
    <>
      <div className="side-menu">
        <div className="logo"></div>
        <ul>
          <li>
            <NavLink to="/inventory">Inventory</NavLink>
          </li>
          <li>
            <NavLink to="/salesExcutive">Sale Excutives</NavLink>
          </li>
          <li>
            <NavLink to="/createorder">Create Order</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;

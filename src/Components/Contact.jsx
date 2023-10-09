import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div>Contact</div>
      <NavLink to="/Contact/Com_1">Contact 1</NavLink>
      <NavLink to="/Contact/Com_2">Contact 2</NavLink>
      <Outlet />
    </div>
  );
};

export default Contact;

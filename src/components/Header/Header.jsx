import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log("isLoggedIn:", isLoggedIn);
  console.log("user:", user);

  return (
    <div className="flex bg-teal-600 text-white	p-5 justify-between	flex-col	">
      <div className="text-sm sm:text-sm">Phone Book</div>
      {isLoggedIn && <div>Welcome, {user.name}</div>}
      <div className="flex justify-between">
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={buildLinkClass} to="/contactlist">
            Contactlist
          </NavLink>
        )}

        {!isLoggedIn && (
          <>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
          </>
        )}

        {isLoggedIn && (
          <button
            onClick={() => dispatch(logout())}
            className="btn btn-secondary h-5"
          >
            Exit
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;

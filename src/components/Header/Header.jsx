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

  return (
    <div className="flex bg-teal-600 text-white	p-5 justify-between items-center flex-col	sm:flex-row ">
      <div className="text-lime-300	decoration-slate-300	underline text-sm sm:text-base items-center lg:text-4xl animate__animated animate__flip">
        Phone Book
      </div>
      {isLoggedIn && (
        <div className="text-sm sm:text-base items-center lg:text-4xl">
          Welcome, {user.name}
        </div>
      )}
      <div className="flex justify-between items-center gap-5">
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
            className="btn btn-secondary h:"
          >
            Exit
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;

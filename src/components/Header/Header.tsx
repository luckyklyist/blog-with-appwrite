import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

const Header = () => {
  const loginStatus = useSelector((state: RootState) => state.auth.status);
  const navItems = [
    {
      name: "Blogs",
      link: "/blogs",
      status: loginStatus,
    },
    {
      name: "Profile",
      link: "/profile",
      status: loginStatus,
    },
    {
      name: "LogIn",
      link: "/login",
      status: !loginStatus,
    },
    {
      name: "SignUp",
      link: "/signup",
      status: !loginStatus,
    },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          KlyistBlog{" "}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => {
            return (
              item.status && (
                <li key={item.name}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              )
            );
          })}
          <li>{loginStatus ? <a>LogOut</a> : <a>LogIn</a>}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

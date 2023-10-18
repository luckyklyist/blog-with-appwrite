import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import { LogOutButton } from "..";

const Header = () => {
  const loginStatus = useSelector((state: RootState) => state.auth.status);
  const navItems = [
    {
      name: "Blogs",
      link: "/blogs",
      status: true,
    },
    {
      name: "Profile",
      link: "/profile",
      status: loginStatus,
    },
    {
      name: "SignUp",
      link: "/signup",
      status: !loginStatus,
    },
  ];
  return (
    <div className="navbar bg-black ">
      <div className="flex-1 ml-10">
        <Link
          to="/"
          className="text-2xl font-bold italic text-yellow-600 underline"
        >
          KlyistBlog
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 mr-10">
          {navItems.map((item) => {
            return (
              item.status && (
                <li key={item.name}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              )
            );
          })}
          <li>
            {loginStatus ? <LogOutButton /> : <Link to="/login">LogIn</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

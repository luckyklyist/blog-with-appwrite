import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Header = () => {
  const loginStatus = useSelector((state: RootState) => state.auth.status);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">KlyistBlog </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a>Profile</a>
          </li>
          <li>{loginStatus ? <a>LogOut</a> : <a>LogIn</a>}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

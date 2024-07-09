import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext} from "../../AuthContext";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const { dispatch: authDispacth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      authDispacth({ type: "LOGOUT" });
      navigate("/login"); 
    })
    .catch((error) => {
      console.error("Logout error: ", error);
    })

  }
  return (
    <div className="sidebar">
  <div className="top">
    <Link to="/">
      <span className="logo">Store</span>
    </Link>
  </div>
  <hr />
  <div className="center">
    <ul>
      <p className="title">MAIN</p>
      <li>
        <DashboardIcon className="icon"/>
        <span>Dashboard</span>
      </li>
      <p className="title">LIST</p>
      <Link to="/users">
        <li data-testid="users">
          <PersonIcon className="icon"/>  
          <span>Users</span>
        </li>
      </Link>
      <Link to="/products">
        <li>
          <AddCardIcon className="icon"/>  
          <span>Products</span>
        </li>
      </Link>
      <li>
        <AddBusinessIcon className="icon"/>
        <span>Orders</span>
      </li>
      <Link to="/categories">
        <li>
          <CategoryIcon className="icon"/>  
          <span>Categories</span>
        </li>
      </Link>
      <p className="title">USER</p>
      <li>
        <AccountBoxIcon className="icon"/>
        <span>Profile</span>
      </li>
      <li onClick={handleLogout}>
      <LogoutIcon className="icon"/>
        <span>Logout</span>
      </li>
    </ul>
  </div>
  <div className="bottom">
    <div className="colorOption" onClick={() => dispatch({ type: "LIGHT"})}></div>
    <div className="colorOption" onClick={() => dispatch({ type: "DARK"})}></div>
  </div>
  <div className="bottom">
    <div className="colorOption"></div>
    <div className="colorOption"></div>
  </div>
</div>
  );
};

export default Sidebar;
import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import MyDatatable from "./component/mydatatable/MyDatatable";
import MyList from "./pages/MyList/MyList";
import Widget from "./component/widget/Widget";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { productInputs, userInputs } from "./formsource"
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  };

  const NotRequireAuth = ({ children }) => {
    return NotRequireAuth ? <Navigate to="/login" /> : chil
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route 
                path="new" 
                element={<New inputs={userInputs} title="Add New User"/>}
                />
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productsId" element={<Single />}></Route>
              <Route
                path="new" 
                element={<New inputs={productInputs} title="Add New Products"/>}
                />
            </Route>
            <Route path="categories">
              <Route index element={<MyList />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
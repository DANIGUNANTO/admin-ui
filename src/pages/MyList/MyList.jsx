import "./mylist.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Widget from "../../component/widget/Widget";
import MyDatatable from "../../component/mydatatable/MyDatatable";
import List from "../list/List";
import { userColumns, productColumns, categoryColumns } from "../../datatablesource";
import Datatable from "../../component/datatable/Datatable";

const MyList = () => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="mylistContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="categories" />
          <Widget type="products" />
        </div>
        <Datatable columns={categoryColumns} />
      </div>
    </div>
  );
};

export default MyList;
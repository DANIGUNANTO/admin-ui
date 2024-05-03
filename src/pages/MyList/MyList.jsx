import "./mylist.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Widget from "../../component/widget/Widget";
import MyDatatable from "../../component/mydatatable/MyDatatable";


const MyList = () => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="mylistContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order"/>
          <Widget type="earning"/>
        </div>
        <MyDatatable />
        
      </div>
    </div>
  );
};

export default MyList;
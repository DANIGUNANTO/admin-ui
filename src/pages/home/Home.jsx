import "./home.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Widget from "../../component/widget/Widget";
import Chart from "../../component/chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="categories" />
          <Widget type="products" />
        </div>
        <div className="charts">
          <Chart type="order" aspect={2 / 1} />
          <Chart type="earning" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from "react";
import Homeimg from "../../assest/House.png";
import ColumnChart from "./ColumnChart"; // Import the column chart component
import "./Dashboard.css";

function HomePage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div
            className="card border-0 shadow-lg rounded"
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            <div className="card-body">
              <h1 className="mb-4">Dashboard</h1>
              {/* Your dashboard content here */}
              <div className="dashboard-content">
                <div className="img-container">
                  <img
                    src={Homeimg}
                    alt="Dashboard Image"
                    className="img-fluid"
                  />
                </div>
                {/* Cards */}
                <div
                  className="row mt-4 justify-content-center"
                  style={{ height: "200px" }}
                >
                  <div className="col-md-4 p-3">
                    <div className="card h-100">
                      <div className="card-body">Card 1</div>
                    </div>
                  </div>
                  <div className="col-md-4 p-3">
                    <div className="card h-100">
                      <div className="card-body">Card 2</div>
                    </div>
                  </div>
                  <div className="col-md-4 p-3">
                    <div className="card h-100">
                      <div className="card-body">Card 3</div>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="chart mt-4">Users This Month(250)
                {/* Integrate the column chart component */}
                <li className="nav-item">
                  <ColumnChart />
                </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

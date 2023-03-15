import React from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../Ui/Header";
import ProgressCircle from "../../Ui/ProgressCircle";
import StatCard from "../../Ui/StatCard";

const DashBoard = () => {
  return (
    <div>
      <header className="w-full flex items-center justify-between">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <button className="flex items-center justify-center gap-3 px-3 py-2 rounded-lg shadow-[5px_5px_7px_rgba(0,0,0,0.2),-5px_-5px_9px_rgba(255,255,255,10)] hover:shadow-[inset_5px_5px_7px_rgba(0,0,0,0.2),inset_-5px_-5px_9px_rgba(255,255,255,10)] dark:shadow-[_10px_10px_20px_rgba(43,43,43),-5px_-5px_9px_rgba(59,59,59)] hover:dark:shadow-[inset_10px_10px_20px_rgba(43,43,43),inset_-5px_-5px_9px_rgba(59,59,59)]">
          <DownloadOutlinedIcon />
          <span className="uppercase"> Download reports</span>
        </button>
      </header>
      <main className="mt-5">
        <section className="w-full flex items-center gap-10 justify-between">
          <div className="neumorphism w-1/4">
            <StatCard
              icon={<EmailIcon />}
              amount="12,341"
              title="Emails Sent"
              value="14"
              angle="70"
            />
          </div>
          <div className="neumorphism w-1/4">
            <StatCard
              icon={<PointOfSaleIcon />}
              amount="432,341"
              title="Sales Obtained"
              value="21"
              angle="45"
            />
          </div>
          <div className="neumorphism w-1/4">
            <StatCard
              icon={<PersonAddIcon />}
              amount="43,341"
              title="New Clients"
              value="5"
              angle="35"
            />
          </div>
          <div className="neumorphism w-1/4">
            <StatCard
              icon={<TrafficIcon />}
              amount="132,143,341"
              title="Traffic Received"
              value="43"
              angle="85"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashBoard;

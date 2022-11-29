import TablePagination from "../../components/table/Table";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/SidebarComponent";
import Wallets from "../../components/wallets/Wallets";
import "./dashboard.css";
import { useState } from "react";

export default function Dashboard() {
  const [walletData, setWalletData] = useState(["statewallettest"]);

  return (
    <>
      <Navbar />
      <div className="page">
        <Sidebar />
        <div className="hero">
          <h1>Wallets</h1>
          <Wallets walletData={walletData} setWalletData={setWalletData} />
        </div>
        <div className="table">
          <TablePagination />
        </div>
      </div>
    </>
  );
}

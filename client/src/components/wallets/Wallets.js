import React, { useEffect } from "react";
import api from "../../api/api";
import "./wallet.css";

export default function Wallets(props) {
  useEffect(() => {
    const fetchApi = async () => {
      try {
        let response = await api.get("/wallet");
        props.setWalletData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []);

  ///////////////////////////////////////////////////////////
  function handleDelete() {
    console.log("deleted");
  }
  function handleExchange() {
    console.log("data to exchange");
  }

  ///////////////////////////////////////////////////////////
  const element = props.walletData.map((walletContainer) => (
    <div className="card">
      <h5>Wallet {walletContainer.wallet}</h5>
      <div className="leftRight">
        <div className="currencyValue">
          <h5>USD: ${walletContainer.currency?.USD}</h5>
          <h5>SGD: ${walletContainer.currency?.SGD}</h5>
          <h5>YEN: Y{walletContainer.currency?.YEN}</h5>
        </div>
        <div className="buttonDiv">
          <button onClick={handleExchange}> exchange currency</button>
          <br />
          <button onClick={handleDelete}>delete wallet</button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h3>John</h3>
      <div className="wallets">{element}</div>
    </>
  );
}

import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Modal from "../components/Modal/Modal";
import Navigate from "../components/Navigate/Navigate";
import Index from "../components/Index/Index";
import Token from "../components/Token/Token";
import Account from "../components/Account/Account";
import { initializeWeb3, connectWallet } from "../utils/contract";
import Web3 from "web3";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config";
import FormCard from "../components/FormCard/FormCard";
import store from "../store/store";
class App extends Component {
  constructor() {
    super();
    // initializeWeb3();
    this.state = {
      address: "",
      isCreateFarmModalOpen: false,
      web3: null,
      contract: null,
    };
  }
  // Forms arr
  // [{
  //   lpToken: "0x43FdbEE01A1f6698766a51A69D4A849eC09CBe81",
  //   rewardToken: "0x2f4eb47A1b1F4488C71fc10e39a4aa56AF33Dd49",
  //   startBlock: "11250787",
  //   blockReward: "0.017917671788586986",
  //   bonusEndBlock: "11296064",
  //   bonus: "2",
  //   endBlock: "12365817",
  //   farmableSupply: "20789.999999999999964702",
  //   bonnumFarmersus: "47",
  // },{
  //   lpToken: "0x43FdbEE01A1f6698766a51A69D4A849eC09CBe81",
  //   rewardToken: "0x2f4eb47A1b1F4488C71fc10e39a4aa56AF33Dd49",
  //   startBlock: "742578325",
  //   blockReward: "0.017917671788586986",
  //   bonusEndBlock: "11296064",
  //   bonus: "2",
  //   endBlock: "12365817",
  //   farmableSupply: "20789.999999999999964702",
  //   bonnumFarmersus: "47",
  // },{
  //   lpToken: "0x43FdbEE01A1f6698766a51A69D4A849eC09CBe81",
  //   rewardToken: "0x2f4eb47A1b1F4488C71fc10e39a4aa56AF33Dd49",
  //   startBlock: "345345345",
  //   blockReward: "0.017917671788586986",
  //   bonusEndBlock: "11296064",
  //   bonus: "2",
  //   endBlock: "12365817",
  //   farmableSupply: "20789.999999999999964702",
  //   bonnumFarmersus: "47",
  // }];
  async componentDidMount() {
    const requestToFetch = await fetch("http://localhost:4000/getFarmInfo", {
      // Adding method type
      method: "POST",
    });
    const { result } = await requestToFetch.json();
    console.log("result", result);
    store.dispatch({ type: "STORE_DATA", result });
    await initializeWeb3();
    await this.initWeb3();
  }

  initWeb3 = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

    this.setState({ account: accounts[0], web3, contract });
  };

  metamask = async () => {
    const addr = await connectWallet();
    this.setState({
      address: `${addr.slice(0, 7)}...${addr.slice(37, -1)}`,
      connected: true,
      isCreateFarmModalOpen: true,
    });
  };

  render() {
    const { state } = this.props;
    return (
      <div>
        <Navbar address={this.state.address} connected={this.state.connected} />
        <Navigate />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Index
                contract={this.state.contract}
                account={this.state.account}
                onPopupClosed={() => {
                  this.setState({ isCreateFarmModalOpen: false });
                }}
                isCreateFarmModalOpen={this.state.isCreateFarmModalOpen}
              />
            )}
          />
          <Route path="/token" exact render={(props) => <Token />} />
          <Route path="/account" exact render={(props) => <Account />} />
        </Switch>
        <Modal metamask={this.metamask} />
        {state.length > 0 &&
          state.map((data, index) => {
            return <FormCard key={index} data={data} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(App);

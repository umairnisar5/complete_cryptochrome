import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Modal from "../components/Modal/Modal";
import Navigate from "../components/Navigate/Navigate";
import Index from "../components/Index/Index";
import Token from "../components/Token/Token";
import Account from "../components/Account/Account";
import { initializeWeb3, connectWallet } from "../utils/contract";
import Web3 from 'web3'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config"
class App extends Component {

  constructor() {
    super();
    // initializeWeb3();
    this.state = { address: '', isCreateFarmModalOpen: false, web3: null, contract: null }
  }

  async componentDidMount() {
    await initializeWeb3();
    await this.initWeb3()
  }


  initWeb3 = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)

    this.setState({ account: accounts[0], web3, contract })
  }

  metamask = async () => {
    const addr = await connectWallet();
    this.setState({
      address: `${addr.slice(0, 7)}...${addr.slice(37, -1)}`,
      connected: true, isCreateFarmModalOpen: true
    })
  }

  render() {
    return (
      <div>
        <Navbar address={this.state.address} connected={this.state.connected} />
        <Navigate />
        <Switch>
          <Route path="/" exact render={
            props => <Index

              contract={this.state.contract}
              account={this.state.account}
              onPopupClosed={() => {
                this.setState({ isCreateFarmModalOpen: false })
              }}


              isCreateFarmModalOpen={this.state.isCreateFarmModalOpen} />
          }
          />
          <Route path="/token" exact render={
            props => <Token />
          }
          />
          <Route path="/account" exact render={
            props => <Account />
          }
          />
        </Switch>
        <Modal metamask={this.metamask} />
      </div>
    )
  }
}

export default App;

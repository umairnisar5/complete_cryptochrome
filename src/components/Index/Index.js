import React, { useState ,useEffect} from 'react'
import "./Index.css"
import "./pop.css"
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "../../../node_modules/awesome-react-steps/lib/css/arrows.css";
import { Arrows } from "awesome-react-steps";
import { Row, Col, Container } from 'react-bootstrap';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: "40%",
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: "30px",
        padding: "20px"


    }
};
Modal.defaultStyles.overlay.backgroundColor = '#00000087';

// Modal.setAppElement('#yourAppElement')

export default function Index(props) {
    const [contract, setContract] = useState()

    const [isPopUpFirstPage, setPopUpFirstPage] = useState(true)
    const [formStep, setFormStep] = useState(0)

    const [tokenAddress, setTokenAddress] = useState("");
    const [pair2Address, setPair2Address] = useState("");
    const [startDate, setStartDate] = useState("");
    const [startBlock, setStartBlock] = useState("");
    const [multiplier, setMultiplier] = useState(1);
    const [endDate, setEndDate] = useState("");
    const [expectedLiquidity, setExpectedLiquidity] = useState("");

    const [bonusEndDate, setBonusEndDate] = useState("");
    const [bonusEndBlock, setBonusEndBlock] = useState("");
    const [bonusAmount, setBonusAmount] = useState("");

    const [endBlockDate, setEndBlockDate] = useState("");
    const [endBlock, setEndBlock] = useState("");

    const [modalIsOpen, setIsOpen] = React.useState(false);
    
   
    useEffect(() => {
        setIsOpen(props.isCreateFarmModalOpen)
    },[props.isCreateFarmModalOpen])


    useEffect(() => {
        setContract(props.contract)
    },[props.contract])






    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }


    const submitForm=async ()=>{

        
        if(contract){


            console.log("functios",tokenAddress,expectedLiquidity,pair2Address,multiplier,
            startBlock,bonusEndBlock,bonusAmount,)
            
            await contract.methods.createFarm(
                tokenAddress,expectedLiquidity,pair2Address,multiplier,
                startBlock,bonusEndBlock,bonusAmount,




            )  .send({from:props.account,
                gas: 1000000})

        }else{
            alert("contract is null")
        }
  
        console.log("dataaaaa",tokenAddress,pair2Address,
        startDate,startBlock,multiplier,endDate,bonusEndBlock,bonusEndBlock)
    }


    const renderPart1 = () => {
        return <Container style={{}}>

            <Col>
                <span><strong>Paste token address</strong></span>
                <br></br>
                <input type="text" placeholder="Enter Address" style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 22,
                    fontSize: 18,
                    borderColor: "gray", borderWidth: .8
                }}

                    value={tokenAddress}
                    onChange={(t) => {
                        setTokenAddress(t.target.value)
                    }} />
                <br></br>


                <input type="text" placeholder="Expected Liquidity" style={{
                    padding: 10,
                    width: "100%",
                    marginTop:10,
                    borderRadius: 22,
                    fontSize: 18,
                    borderColor: "gray", borderWidth: .8
                }}

                    value={expectedLiquidity}
                    onChange={(t) => {
                        setExpectedLiquidity(t.target.value)
                    }} />
                <br></br>

                <div className="row" style={{
                    alignContent: "center",
                    justifyContent: "center", marginTop: 10
                }}>

                    <button

                        onClick={() => {
                            setFormStep(formStep - 1)
                            props.onPopupClosed()
                        }}


                        style={{
                            padding: 8,
                            flex: 1,
                            borderRadius: 22,
                            fontSize: 18,
                            paddingRight: 10,
                            paddingLeft: 10,
                            color: "#fff",
                            fontSize: "bold",
                            backgroundColor: "red", borderWidth: .8
                        }}>Back</button>



                    <button

                        onClick={() => {
                            setFormStep(formStep + 1)
                        }}

                        style={{
                            flex: 1,
                            padding: 8,
                            borderRadius: 22,
                            fontSize: 18,
                            paddingRight: 10,
                            paddingLeft: 10,
                            color: "#fff",
                            fontSize: "bold",
                            backgroundColor: "#7e53ff", borderWidth: .8
                        }}>Continue</button>
                </div>



            </Col>

        </Container>
    }


    const renderPart2 = () => {
        return <Container style={{}}>

            <Col>
                <span><strong> Paste uniswap v2 pair address that farmers can farm the yield token on</strong></span>
                <br></br>



                <input type="text" placeholder="Enter Address" style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 22,
                    fontSize: 18,
                    borderColor: "gray", borderWidth: .8
                }}
                    value={pair2Address}

                    onChange={(t) => {
                        setPair2Address(t.target.value)
                    }} />
                <br></br>



                <span><strong>             This MUST be a valid uniswap v2 pair. The contract checks this is a uniswap pair on farm creation. If it is not the script will revert.
</strong></span>

                <div className="row" style={{
                    alignContent: "center",
                    justifyContent: "center", marginTop: 10
                }}>

                    <button

                        onClick={() => {
                            setFormStep(formStep - 1)
                        }}


                        style={{
                            padding: 8,
                            flex: 1,
                            borderRadius: 22,
                            fontSize: 18,
                            paddingRight: 10,
                            paddingLeft: 10,
                            color: "#fff",
                            fontSize: "bold",
                            backgroundColor: "red", borderWidth: .8
                        }}>Back</button>



                    <button

                        onClick={() => {
                            setFormStep(formStep + 1)
                        }}

                        style={{
                            flex: 1,

                            padding: 8,
                            borderRadius: 22,
                            fontSize: 18,
                            paddingRight: 10,
                            paddingLeft: 10,
                            color: "#fff",
                            fontSize: "bold",
                            backgroundColor: "#7e53ff", borderWidth: .8
                        }}>Continue</button>
                </div>


            </Col>

        </Container>


    }


    const renderPart3 = () => {
        return <Container style={{}}>

            <Col>
                <span><strong>We reccommend a start block at least 24 hours in advance to give people time to get ready to farm.
</strong></span>
                <br></br>
                <input type="date" placeholder="Enter Date" style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 22,
                    fontSize: 18,
                    borderColor: "gray", borderWidth: .8
                }}

                    value={startDate}

                    onChange={(t) => {
                        setStartDate(t.target.value)
                    }} />
                <br></br>


                <input type="text" placeholder="Enter Block" style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 22,
                    marginTop: 8,
                    fontSize: 18,
                    borderColor: "gray", borderWidth: .8
                }}
                    value={startBlock}

                    onChange={(t) => {
                        setStartBlock(t.target.value)
                    }} />
                <br></br>

                <div className="row" style={{
                    alignContent: "center",
                    justifyContent: "center", marginTop: 10
                }}>

                    <button

                        onClick={() => {
                            setFormStep(formStep - 1)
                        }}


                        style={{
                            padding: 8,
                            flex: 1,
                            borderRadius: 22,
                            fontSize: 18,
                            paddingRight: 10,
                            paddingLeft: 10,
                            color: "#fff",
                            fontSize: "bold",
                            backgroundColor: "red", borderWidth: .8
                        }}>Back</button>



                    <button

                        onClick={() => {
                            setFormStep(formStep + 1)
                        }}

                        style={{
                            flex: 1,

                            padding: 8,
                            borderRadius: 22,
                            fontSize: 18,
                            paddingRight: 10,
                            paddingLeft: 10,
                            color: "#fff",
                            fontSize: "bold",
                            backgroundColor: "#7e53ff", borderWidth: .8
                        }}>Continue</button>
                </div>



            </Col>

        </Container>

    }


    const renderPart4 = () => {
        return <Container style={{}}>

            <Col>

                <input type="text" placeholder="Multiplier (1x)" style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 22,
                    fontSize: 18,
                    borderColor: "gray", borderWidth: .8
                }} value={multiplier}
                    onChange={(t) => {
                        setMultiplier(t.target.value)
                    }} />
                <br></br>

                <span><strong>Bonus periods start at the start block and end at the below specified block. For no bonus period set the multiplier to '1' and the bonus end block to 11484140</strong></span>
                <br></br>



                <input type="text" placeholder="Bonus Amount" style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 22,
                    fontSize: 18,
                    borderColor: "gray", borderWidth: .8
                }} value={bonusAmount}
                    onChange={(t) => {
                        setBonusAmount(t.target.value)
                    }} />
                <br></br>


                <input type="date" placeholder="Bonus end date" style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 22,
                    marginTop: 8,
                    fontSize: 18,
                    borderColor: "gray", borderWidth: .8
                }}

                    value={bonusEndDate}

                    onChange={(t) => {
                        setBonusEndDate(t.target.value)
                    }} />
                <br></br>


                <input type="text" placeholder="Bonus end block" style={{
                    padding: 10,
                    width: "100%",
                    borderRadius: 22,
                    marginTop: 8,
                    fontSize: 18,
                    borderColor: "gray", borderWidth: .8
                }}

                    value={bonusEndBlock}

                    onChange={(t) => {
                        setBonusEndBlock(t.target.value)
                    }} />
                <br></br>




                <div className="row" style={{
                    alignContent: "center",
                    justifyContent: "center", marginTop: 10
                }}>

                    <button

                        onClick={() => {
                            setFormStep(formStep - 1)
                        }}


                        style={{
                            padding: 8,
                            flex: 1,
                            borderRadius: 22,
                            fontSize: 18,
                            paddingRight: 10,
                            paddingLeft: 10,
                            color: "#fff",
                            fontSize: "bold",
                            backgroundColor: "red", borderWidth: .8
                        }}>Back</button>



                    <button

                        onClick={() => {
                            setFormStep(formStep + 1)
                        }}

                        style={{
                            flex: 1,

                            padding: 8,
                            borderRadius: 22,
                            fontSize: 18,
                            paddingRight: 10,
                            paddingLeft: 10,
                            color: "#fff",
                            fontSize: "bold",
                            backgroundColor: "#7e53ff", borderWidth: .8
                        }}>Continue</button>
                </div>


            </Col>

        </Container>

    }


    const renderPart5 = () => {
        return <>


            <input type="date" placeholder="Date" style={{
                padding: 10,
                width: "100%",
                borderRadius: 22,
                marginTop: 8,
                fontSize: 18,
                borderColor: "gray", borderWidth: .8
            }}
                value={endDate}
                onChange={(t) => {
                    setEndDate(t.target.value)
                }} />
            <br></br>


            <input type="text" placeholder="Block Number" style={{
                padding: 10,
                width: "100%",
                borderRadius: 22,
                marginTop: 8,
                fontSize: 18,
                borderColor: "gray", borderWidth: .8
            }}
                value={endBlock}

                onChange={(t) => {
                    setEndBlock(t.target.value)
                }} />
            <div className="row" style={{
                alignContent: "center",
                justifyContent: "center", marginTop: 10
            }}>

                <button

                    onClick={() => {
                        setFormStep(formStep - 1)
                    }}


                    style={{
                        padding: 8,
                        flex: 1,
                        borderRadius: 22,
                        fontSize: 18,
                        paddingRight: 10,
                        paddingLeft: 10,
                        color: "#fff",
                        fontSize: "bold",
                        backgroundColor: "red", borderWidth: .8
                    }}>Back</button>



                <button
                
                
                onClick={() => {
                    submitForm()
                }}
                
                style={{
                    flex: 1,

                    padding: 8,
                    borderRadius: 22,
                    fontSize: 18,
                    paddingRight: 10,
                    paddingLeft: 10,
                    color: "#fff",
                    fontSize: "bold",
                    backgroundColor: "#7e53ff", borderWidth: .8
                }}>Continue</button>
            </div>
        </>
    }




    const renderFormPart = (partNumber) => {


        switch (partNumber) {
            case 1:

                return renderPart1()
            case 2:
                return renderPart2()

            case 3:
                return renderPart3()

            case 4:
                return renderPart4()

            case 5:
                return renderPart5()

        }
    }



    const renderPart2Modal = () => {

        return <div style={{
            marginBottom: 10,
        }}>



            <Arrows
                model={{
                    steps: [
                        { label: "Farm which token?" },
                        { label: "Select uniswap pair" },
                        { label: "Start Block" },

                        { label: "1x Bonus" },
                        { label: "End Block" },


                    ],
                    current: formStep - 1
                }}
            />;


{renderFormPart(formStep)}
        </div>
    }

    const renderModal = () => {
        return <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            shouldCloseOnOverlayClick={false}
            contentLabel="Example Modal"
        >

            <div className="row" style={{
                borderBottom: "1px #b2afaf solid"

            }}>

                <button type="button" className="backBtn v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default"><span className="v-btn__content"><i aria-hidden="true" className="v-icon notranslate mdi mdi-arrow-left theme--light" /></span></button>



                <div style={{
                    textAlign: "center",
                    flex: 1,
                }}>
                    <h2> Launch a Farm  </h2>

                    <p>Current block: 11465157</p>
                </div>



                <button type="button"

                    className="backBtn v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default"><span className="v-btn__content"><i aria-hidden="true" className="v-icon notranslate mdi mdi-arrow-left theme--light" /></span></button>


            </div>



            {isPopUpFirstPage ?

                <div style={{ marginLeft: 20, marginRight: 20 }}>

                    <span style={{ fontSize: 30, }}>Launching a farm on a uniswap pair is now incredibly simple.
                    You deposit the reward token into a vault contract, set the start block,
                    endblock, and bonus period -And your done!
            </span>





                    <div className="caption mt-3" style={{ marginBottom: 10 }}> A farming contract is final. You cannot change <span className="font-weight-bold">any</span> paramaters once initialised. There is no way to remove tokens other than farm them out over the set period. You cannot increase rewards either although you may create additional farms. <div className="font-weight-bold mt-3"> Do not use this with </div><div className="d-flex align-start"><i aria-hidden="true" className="v-icon notranslate mt-1 mr-2 mdi mdi-circle theme--light" style={{ fontSize: '12px' }} /><div> Rebasing tokens or any 'hack' on how a ERC20 token should function. </div></div><div className="d-flex align-start"><i aria-hidden="true" className="v-icon notranslate mt-1 mr-2 mdi mdi-circle theme--light" style={{ fontSize: '12px' }} /><div> Fee to sender tokens </div></div><div className="d-flex align-start"><i aria-hidden="true" className="v-icon notranslate mt-1 mr-2 mdi mdi-circle theme--light" style={{ fontSize: '12px' }} /><div> We reserve the right to delist your farm from our front end app if you dont adhere to these token specifications as it will affect farmers. </div></div><div className="mt-3"> Essentially 1 token must always equal 1 token. If you send someone one token and they recieve less than one token you wont be able to generate a farm. For the rest of the 99% of normal ERC20 tokens with no weird transfer functions or magically changing balances (rebasing), this platform is for you. </div><div className="mt-3 primary--text"> Feel free to email Mark at email for help setting up your farm. </div></div>

                    <button type="button"

                        onClick={() => {
                            setPopUpFirstPage(false)
                            setFormStep(1)
                        }}


                        className="continueBtn v-btn v-btn--block v-btn--depressed v-btn--rounded theme--light v-size--x-large primary"><span className="v-btn__content"> Continue </span></button>
                </div>
                : null}


                {formStep >0?renderPart2Modal():null}


        </Modal>
    }





    return (
        <div className="container">
            <center>
                <div className="jumbotron" id="ticket">
                    <h1 style={{ fontWeight: "bold", color: "#fff" }}>$630k</h1>
                    <p style={{ fontWeight: "bold", color: "#fff" }}>Total farming liquidity</p><hr />
                    <div className="row">
                        <div className="col-sm-6"></div>


                        {renderModal()}



                        <div className="col-sm-6">
                            <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myWallet" style={{ background: "none", border: "1px solid #fff" }}>Create Farm</button>
                            <button className="btn btn-primary btn-lg" style={{ background: "none", border: "1px solid #fff" }}>
                                <span className="fa fa-circle-o"></span>
                                <span className="fa fa-sort"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

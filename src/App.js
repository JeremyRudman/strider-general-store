import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Homepage from './Homepage';
import ReceiptPage from './ReceiptPage';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            receiptList: [],
            receiptMap: {},
            loading: true,
        };
    }

    async componentDidMount() {
        const header = { headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }};
        const response = await fetch("receipts.json", {header});
        const data = await response.json();
        const receiptMap = new Map(
            data.map(receipt => {
                return [receipt.OrderId, receipt]
            })
        )
        this.setState({
            receiptList: data,
            receiptMap: receiptMap,
            loading: false})
    }

    render() {
        if(!this.state.loading){
            console.log(this.state.receiptMap)
            return (
                <div className="App">
                    <Router>
                        <Header/>
                        <Routes>
                            <Route path="/" exact element={<Homepage receiptList={this.state.receiptList}/>}/>
                            <Route path="/receipt/:receiptId" element={<ReceiptPage receiptMap={this.state.receiptMap}/>}/>
                        </Routes>
                    </Router>
                </div>
            );
        } else{
            return (
                <Router>
                    <Header/>
                </Router>
            )
        }
    }
}

export default App;

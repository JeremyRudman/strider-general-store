import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReceiptCard from './ReceiptCard';
import Header from './Header';
import { Grid } from '@mui/material';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            receiptList: [],
        };
    }

    async componentDidMount() {
        const header = { headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }};
        const response = await fetch("receipts.json", {header});
        const data = await response.json();
        this.setState({receiptList: data})
    }

    render() {
        let cardList = this.state.receiptList.map((receipt) => {
            return (
                    <ReceiptCard key={receipt.OrderId} receiptData = {receipt}/>
                    );
        })

        return (
        <div className="App">
            <Header/>
            <Grid container spacing={3}>
                {cardList}
            </Grid>
        </div>
        );
    }
}

export default App;

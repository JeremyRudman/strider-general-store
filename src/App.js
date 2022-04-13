import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReceiptCard from './ReceiptCard';
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
                    <Grid item key={receipt.OrderId} spacing={3} className='receiptCardWrapper'>
                        <ReceiptCard receiptData = {receipt}/>
                    </Grid>
                    );
        })

        return (
        <div className="App">
            <div className='cardsWrapper'>
                <Grid container spacing={3}>
                    {cardList}
                </Grid>
            </div>
        </div>
        );
    }
}

export default App;

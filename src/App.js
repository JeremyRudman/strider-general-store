import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Homepage from './Homepage';
import ReceiptPage from './ReceiptPage';
class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/" exact element={<Homepage/>}/>
                        <Route path="/receipt/:receiptId" element={<ReceiptPage/>}/>
                    </Routes>
                </Router>
            </div>
        );
 
    }
}

export default App;

import { Grid } from '@mui/material';
import ReceiptCard from './ReceiptCard'
import { useState, useEffect } from 'react';

// an async function reads the receipts from the json file and stores them as a list
async function getReceiptList(setReceipts) {
    const header = { headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }};
    const response = await fetch("/receipts.json", {header});
    if(!response.ok){
        throw new Error(response.json())
    } else {
        const data = await response.json();
        setReceipts(data)
    }
}

export default function Homepage() {
    const [receipts, setReceipts] = useState([]);

    // runs on component render to get receipts
    useEffect(() => {
        getReceiptList(setReceipts)
    }, [])

    // loads each receipt with basic info as a card which is loaded into a grid
    let cardList = receipts.map((receipt) => {
        return (
            <ReceiptCard key={receipt.OrderId} receiptData = {receipt}/>
        );
    })

    return(
        <Grid container spacing={3}>
            {cardList}
        </Grid>
    )

}
import { Grid } from '@mui/material';
import ReceiptCard from './ReceiptCard'
import { useState, useEffect } from 'react';

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

    useEffect(() => {
        getReceiptList(setReceipts)
    }, [])

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
import { Card, Typography, Grid, styled } from '@mui/material';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getDateString, getTimeString } from './helper';

const WhiteTypography = styled(Typography)(() => ({
    color: "#FFFFFF",
}));

async function getReceipt(setReceipt, setLoading, orderId) {
    const header = { headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }};
    const response = await fetch("/receipts.json", {header});
    if(!response.ok) {
        throw new Error(response.json())
    } else {
        const data = await response.json();
        var foundReceipt = null;
        data.forEach(receipt => {
            // the double equals is intentional here as the object stores it as an int and the orderId
            // from the params is a string
            if(receipt.OrderId == orderId){
                foundReceipt = receipt;
            }
        });
        if(foundReceipt !== null){
            setReceipt(foundReceipt)
            setLoading(false)
        }
    }
}

export default function ReceiptPage() {
    const { receiptId } = useParams();
    const [receipt, setReceipt] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getReceipt(setReceipt, setLoading, receiptId)
    }, [])

    const dateTimeString = () => { 
        return `${getDateString(new Date(receipt.Date))} ${getTimeString(new Date(receipt.Date))}`
    }
    const cardStyle = {
        backgroundColor: "#F5B125",
        mx: 2,
        p: 1,
    }


    const itemsPurchased = () => {
        const itemList = receipt.Items.map((itemInfo) => {
            return(
                <div key={itemInfo.Item}>
                    <WhiteTypography variant="h6"align="center">
                            Item Name: {itemInfo.Item} 
                    </WhiteTypography>
                    <WhiteTypography align="center">
                        Item Price: {itemInfo.ItemPrice}
                
                    </WhiteTypography>
                    <WhiteTypography align="center">
                        Quantity Purchased: {itemInfo.Quantity}
                    </WhiteTypography>
                </div>
            )
        });
        return(
            <div>
                <WhiteTypography variant="h6" align="center">
                    Items Purchased:
                </WhiteTypography>
                {itemList}
            </div>
        )
    }
    if(!loading){
        return(
            <Grid container sx={{justifyContent: "center"}}>
                <Grid item xs={12} sm={8} md={6} lg={5}>
                    <Card sx={cardStyle}>
                        <WhiteTypography variant="h6" component="p" align="center">
                            Customer Name: {receipt.CustomerName}
                        </WhiteTypography>
                        <WhiteTypography variant="h6" component="p" align="center">
                            Purchase Time: {dateTimeString()}
                        </WhiteTypography>
                        <WhiteTypography variant="h6" component="p" align="center">
                            Customer Id: {receipt.CustomerId}
                        </WhiteTypography>
                        <WhiteTypography variant="h6" component="p" align="center">
                            Purchase Total: {receipt.Total}
                        </WhiteTypography>
                        {itemsPurchased()}
                    </Card>
                </Grid>
            </Grid>
        )
    } else {
        return(
            <div></div>
        )
    }

}

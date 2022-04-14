import { Card, Typography } from '@mui/material';
import { useParams } from 'react-router-dom'
import { getDateString, getTimeString } from './helper';

export default function ReceiptPage(props) {
    const { receiptId } = useParams();
    const receipt = props.receiptMap.get(parseInt(receiptId))
    const dateTimeString = `${getDateString(new Date(receipt.Date))} ${getTimeString(new Date(receipt.Date))}`
    console.log(receipt);

    const itemsPurchased = () => {
        console.log(receipt.Items)
        const itemList = receipt.Items.map((itemInfo) => {
            return(
                <div>
                    <Typography align="center">
                            Item Name: {itemInfo.Item}
                        
                    </Typography>
                    <Typography align="center">
                        Item Price: {itemInfo.ItemPrice}
                
                    </Typography>
                    <Typography align="center">
                        Quantity Purchased: {itemInfo.Quantity}
                    </Typography>
                </div>
            )
        });
        return(
            <div>
                <Typography variant="h6" align="center">
                    Items Purchased:
                </Typography>
                {itemList}
            </div>
        )
    }

    return(
        <Card>
            <Typography variant="h6" component="p" align="center">
                Customer Name: {receipt.CustomerName}
            </Typography>
            <Typography variant="h6" component="p" align="center">
                Purchase Time: {dateTimeString}
            </Typography>
            <Typography variant="h6" component="p" align="center">
                Customer Id: {receipt.CustomerId}
            </Typography>
            <Typography variant="h6" component="p" align="center">
                Purchase Total: {receipt.Total}
            </Typography>
            {itemsPurchased()}
        </Card>
    )
}

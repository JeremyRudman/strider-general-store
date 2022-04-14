import { Grid } from '@mui/material';
import ReceiptCard from './ReceiptCard'

export default function Homepage(props) {
    let cardList = props.receiptList.map((receipt) => {
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
import { Card, Typography, CardActions } from '@mui/material';

const ReceiptCard = (props) => {

    return (
        <Card variant="outlined">
            <Typography gutterBottom variant="h5" component="h3" align="center">
                Receipt
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" align="center">
                {props.receiptData.Total}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p" align="center">
                {props.receiptData.Date}
            </Typography>
        </Card>
    )

}

export default ReceiptCard;
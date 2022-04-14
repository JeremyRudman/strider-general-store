import { Card, Typography, CardActionArea, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { getDateString, getTimeString } from './helper';

export default function ReceiptCard(props) {
    const navigate = useNavigate();
    const cardStyle = {
        backgroundColor: "#F5b125",
        mx: 2,
    }

    const textStyle = {
        color: "#FFFFFF"
    }

    const cardActionStyle = {
        p: 1
    }

    // when a card is click on it goes the receipts page this programmatic route change
    const onCardClick = () => {
        navigate(`/receipt/${props.receiptData.OrderId}`);
    }
 

    // uses a helper function to place the date provided into a more human readable format
    const dateObj = new Date(props.receiptData.Date);
    const dateString = `${getDateString(dateObj)} ${getTimeString(dateObj)}`;

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={cardStyle}>
                <CardActionArea sx={cardActionStyle} onClick={onCardClick}>
                    <Typography sx={textStyle} gutterBottom variant="h5" align="center">
                        Receipt #{props.receiptData.OrderId}
                    </Typography>
                    <Typography sx={textStyle} variant="h6" align="center">
                        {props.receiptData.CustomerName}
                    </Typography>
                    <Typography sx={textStyle} variant="h6" align="center">
                        {props.receiptData.Total}
                    </Typography>
                    <Typography sx={textStyle} variant="h6" align="center">
                        {dateString}
                    </Typography>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
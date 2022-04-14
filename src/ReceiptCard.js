import { Card, Typography, CardActionArea, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { getDateString, getTimeString } from './helper';

export default function ReceiptCard(props) {
    const navigate = useNavigate();
    const cardStyle = {
        backgroundColor: "#F7B733",
        mx: 2,
    }

    const textStyle = {
        color: "#FFFFFF"
    }

    const onCardClick = () => {
        console.log(`/receipt/${props.receiptData.OrderId}`)
        navigate(`/receipt/${props.receiptData.OrderId}`);
    }
 

    const dateObj = new Date(props.receiptData.Date);
    const dateString = `${getDateString(dateObj)} ${getTimeString(dateObj)}`;

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={cardStyle}>
                <CardActionArea sx={{p: 1}} onClick={onCardClick}>
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
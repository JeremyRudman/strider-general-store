import { Card, Typography, CardActionArea, Grid } from '@mui/material';
import { useHistory } from "react-router-dom";

function getDateString(dateObj){
    var month;
    var day;
    var year = dateObj.getFullYear();
    
    if(dateObj.getDate() < 10){
        day = `0${dateObj.getDate()}`;
    } else {
        day = dateObj.getDate();
    }

    // month is indexed by zero so need to add one for human readability
    if(dateObj.getMonth() + 1 < 10){
        month = `0${dateObj.getMonth() + 1}`;
    } else {
        month = dateObj.getMonth() + 1;
    }

    // well the m/d/y format is odd I will assume this is for a generic american client and leave it as that
    // this should be checked with the client in a actual project
    return `${month}/${day}/${year}`;
}

export default function ReceiptCard(props) {

    const cardStyle = {
        backgroundColor: "#F7B733",
        padding: 1,
        mx: 2,
    }

    const textStyle = {
        color: "#FFFFFF"
    }
 

    const dateObj = new Date(props.receiptData.Date);
    const dateString = getDateString(dateObj);

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className='receiptCard' sx={cardStyle}>
                <Typography sx={textStyle} gutterBottom variant="h5" align="center">
                    Receipt #{props.receiptData.OrderId}
                </Typography>
                <Typography sx={textStyle} variant="h6" color="textSecondary" component="p" align="center">
                    {props.receiptData.Total}
                </Typography>
                <Typography sx={textStyle} variant="h6" color="textSecondary" component="p" align="center">
                    {dateString}
                </Typography>
            </Card>
        </Grid>
    )
}
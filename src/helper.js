export function getDateString(dateObj){
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
    // this should be checked with the client in an actual project
    return `${month}/${day}/${year}`;
}

export function getTimeString(dateObj){
    var hour;
    var minute;
    var amPm;

    var tempHour = dateObj.getHours();
    if(tempHour < 12){ 
        amPm = "am";
    } else {
        tempHour = tempHour - 12
        amPm = "pm"
    }
    
    if(tempHour === 0){
        hour = "12";
    } else if(tempHour < 10) {
        hour = `0${tempHour}`;
    } else {
        hour = tempHour;
    }

    if(dateObj.getMinutes() < 10){
        minute = `0${dateObj.getMinutes()}`
    } else {
        minute = dateObj.getMinutes();
    }

    return `${hour}:${minute}${amPm}`
}



export const gigasecond = (date) => {

    var gigasec = 10**12; //Convert a gigasecond to giga-miliseconds (1 sec = 1000 miliseconds)
  
    var givenDate = date.getTime() + gigasec ; // Convert the given date into miliseconds (How many miliseconds since 1970), then add 1 giga-miliseconds into.
    var endDate = new Date(givenDate); // Regenerate a date with the result above

    return endDate;

};

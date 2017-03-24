// consume interface and function from namespace from both the files

// declare the message with interface datatype;
var number: message.messageType = {num:12, item:"Bannanas"} ;
// call the namespace method with parameter as interface property;
message.displayMessage(number.num);
message.displayMessageAgain(number.item);
//declare a namespace of message with interface and method
var message;
(function (message) {
    //display a message with number
    function displayMessage(numb) {
        console.log("I am diplaying 1st message, becuase I ate " + numb + " apples");
    }
    message.displayMessage = displayMessage;
})(message || (message = {}));

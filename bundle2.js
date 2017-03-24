//declare a namespace of message with method
var message;
(function (message) {
    //display a message with item
    function displayMessageAgain(item) {
        console.log("I am diplaying 2nd message, becuase I ate 12 " + item);
    }
    message.displayMessageAgain = displayMessageAgain;
})(message || (message = {}));

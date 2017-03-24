//declare a namespace of message with interface and method
namespace message {
    //declare the interface with two properties, one for this file namespace, other for bundle2 namespace
    export interface messageType {
        num: number;
        item: string;
    }
    //display a message with number
    export function displayMessage (numb: number) {
        console.log(`I am diplaying 1st message, becuase I ate ${numb} apples`);
    }

}
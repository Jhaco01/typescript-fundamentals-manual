/* 
    SECOND CLASS = INTERFACES.

    An object can be created in ts just like in javascript:

    const user = {
        name: 'Larry',
        age: 20
    }

    const user2 = {
        name = 'John'
    }

    Objects can be declared with any properties in js.

*/

interface UserInterface {   //With declaring an interface, you stablish
    userName: string,  //how objects of its type should be. It is recomended to 
                   //make clear that is an interface by adding this word to 
                   //the name.
   
    age?: number,   //With this '?' symbol, this marked property is not required.
    
    getMessage?() : string, //This is the way to declare a function inside of an interface

}

const user : UserInterface = {
    userName: 'Jhaco',
    age: 23,
    getMessage() {
        return `Hello ${user.userName}`;
    },
}
 
const user2 : UserInterface = {  //This object throws an error, because of the 
    userName: 'Yune'                 //missing "age" property from "User" interface,
}                                //only adding '?' after the name of the property,
                                 //can be not defined or undefined.

/* console.log(user.namee); This code directly throws an error, because there
                            is not 'namee' property. */



/*

        SIXTH CLASS = CLASSES IN TS.

        Ts can use all features from ES6, but can works with them 
        better.

*/

class User {
    
    private firstName : string; //Here is the main difference with js, 
    private lastName : string;  //datatype of properties can be stablished.
                                //Also, in ts is possible of stablish class properties as 
                                //public, private or protected.

    readonly motherName : string;//You can, as well, stablish values than only can be readed 
                                //and cannot change.

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.motherName = 'any';
    }

    /* 
    changeMothername() : string {    This is a readonly value, so you can change it 
        this.motherName = 'foo';     after create the object.
    }
    */

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

}

const newUser = new User('Jhaco','Delgado');

//console.log(newUser.firstName); This code cannot be read because the property is private.
console.log(newUser.getFullName); //This, on the other hand, is public and can be read.


//          CLASSES CAN IMPLEMENT INTERFACES TOO:

interface AnotherUserInterface {
    getFirstName() : string;
}

class OtherUser implements AnotherUserInterface { //In case of not implementing getFirstName property 
    getFirstName(): string {                      //from the interface, this code mark an error.
        return `any`;
    }

    static maxAge = 50; //It is possible to use static properties as well.
}

console.log(OtherUser.maxAge);//The correct way of using static properties, is with the class 
                              //itself, not with an instance of it.


class newUserChild extends User {}; //inheritance is possible in ts, so this class has all
                                    //the properties from User, although it can declare as much 
                                    //new properties as it needed.

const any = new newUserChild('any','any');//As you can see, it can use the constructor, inspite of
                                          //the fact that has no constructor at all.
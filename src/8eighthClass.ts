/*
        EIGHTH CLASS = ENUMS

        Works as objects, in which you can assign value to a property name.
        The main difference is that you can use enums as datatype, obtaining 
        more control over your properties an code. 

*/


const notEnum = {
    loading : 0,
    inProgress : 1,
    charged: 2
}

//This two codes has the same effect, but the enum could work as a datatype.

enum Enum {        //In an enum setted this way, the value of the properties
    Loading,       //is a number, that start with zero and go on in the next ones.
    InProgress, 
    Charged        //The property name should be uppercase.
}

console.log(notEnum.loading);
//This two elements has the same output.
console.log(Enum.Loading);

//let anyVar : notEnum; This code throws error, because an object cannot be a datatype
let anyVar : Enum; //This, on the other hand, is possible.

enum Enum2 {        
    Loading = 'loading',        //Any value can be assigned to an enum property by 
    InProgress = 'inProgress',   //using this operator: "=".
    Charged = 'charged'
}

//An Enum also can be part of the properties of an interface 

interface OtherInterface {
    anEnum : Enum2;
}

const anObject : OtherInterface = {
    anEnum: Enum2.InProgress,
}

console.log( anObject.anEnum ); // "inProgress"
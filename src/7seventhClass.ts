/*
        SEVENTH CLASS = GENERICS.

        When passing objects to a function as an argument,
        it is better to use a GENERIC "<T>" instead type 
        "any".  
        In this case, ts can know type of data that is receiving 
        and type of data that is going to be returned.

*/

const addId = <T> (obj: T) => {             //The general name to a generic used to be "T" or "V".
    const id = Math.random().toString(16);  //With this code, ts would take the datatype received as 
    return {                                //argument and can work with it, which does not occur 
        ...obj,                             //with type "any".
        id,
    };
};

const car1 = {
    marca: 'Jack',
}

const music = {
    genre: 'pop',
}

const result = addId(car1).marca;  //Working without a generic, it is no possible to ts
const result2 = addId(music).genre;//to predict a property of the result type; which is 
console.log('result', result);     //possible with this code.

//Also an interface could be used as a generic type, fact that should be noticed for ts.

interface anyInterface {
    anyProperty: string;
}

const anyyObject : anyInterface = {
    anyProperty: 'any'
};

addId(anyyObject);//By hoovering the function name, you could see the interface as the generic type.

//In case you need to receive an specific type of data, you can make your generic to extend
//from one of the higher class types, such as object, string, number...

const addAnotherId = <T extends object> (obj: T) => {             
    const id = Math.random().toString(16);  
    return {                                
        ...obj,                             
        id,
    };
};

const car2 = {
    marca: 'Jack',
}

//const result4 = addAnotherId('h');   Here you can see the alert of "string is not assignable 
                                   //  to an object type."

const result4 = addAnotherId(car2);
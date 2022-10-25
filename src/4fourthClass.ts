/* 
    FOURTH CLASS = ANY, VOID, UNKNOWN & NEVER

    VOID: Means that the function does not return a value.

    ANY: With this type, any value can be asigned or returned.

    NEVER: To write a function that will not return to its end point 
    or always throws an exception.

    UNKNOWN: Works like any, but with some retrictions.

*/

// VOID

const doSomething = () : void => {  //This is making clear that there is no value 
    console.log('Doing something'); //being returned in this function.
    //return 1; This code throws error because the function was setted as void.
}

// ANY

let foo : any = 1; //With this, any value can be asigned to foo variable.
foo = '2';
foo = false; 

// NEVER

const neverFunct = () : never => {
    // console.log('throw any error'); This will not work with never.
    throw 'any error';
} 

// UNKNOWN
let unk : unknown = 1;
let an : any = 1;

// let var1 : string = unk; This throw an error because 
//                          an unknown var cannot be taken
//                          as another var type.

let var2 : string = an; // There is not problem with 'any' type


//---------------------------------BONUS: TYPE ASSERTION --------------------------------------------

let newPage : string = '1';
/* 
let numNewPage : number = newPage;           An string cannot be asigned to a number var.
                                        
                                            With the 'as' operator, you can read a var 
                                            as the value you stablish:

                                                newPage 'as' number


let numNewPage : number = newPage as number;        To do something like this, ts asked
                                                    you first to convert the var to 'unknown',
                                                    and after that, convert to a number with 'as'.

                                        
*/

let numNewPage : number = (newPage as unknown) as number; 
console.log(numNewPage);
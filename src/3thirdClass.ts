/* 
    THIRD CLASS = TYPES: UNIONS and ALIAS.

    Union symbol " | " can be used to asign more than one type to a variable 

    An alias type is declared by the word " type ", then the alias name, and 
    then the type.
*/

let pageNumber : number | string = '1'; //This variable can be both number or string.

let errorMessage : null | string = null //It is usually used to variables wich value 
                                        //is null but can change after any event.


type nmb = number;  //Now type number can be called as nmb.

interface AnyInterface {
    anyNumber : nmb;
}

let anyObject : AnyInterface | null = null;


type str = string | null; //Alias and union can be combined.
                          //Also can be used as arrays by addind [] after alias.

let srtArray : str[] = ['any', 'any']; //Otherwise, this would throw an error.
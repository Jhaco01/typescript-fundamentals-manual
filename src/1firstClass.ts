/* FIRST CLASS = Asigning values.

    1.- Install node.
    2.- Install globaly typescript in the root carpet.
    3.- Create main.ts
    4.- To compile the file, run = tsc main.ts // and to watch mode tsc -w main.ts
    5.- Create a tsconfig.json: 

        {
            "compilerOptions": {
                "rootDir": "./src",
                "outDir": "./dist"
            }
        }
    
    main.ts should be inside src folder. After this step only "tsc // tsc -w" is needed to transpile the 
    code to js. 


*/

const hello = 'world'; // const in typescript cannot be changed after declaration.

let hola : string = 'world'; // explicity asign type of the variable to "string".

// hola = true; You can only asign values of the same type in ts.

/*
const getFullName = (name, surname) => {
    return `${name} ${surname}`
}

console.log(getFullName(true,[])); // Doing it by this way, both arguments are type "any", therefore,
it can receive any value. 

*/

const getFullName = (name : string, surname : string) : string => { //Both parameters type are 
                                                                    //declarated. Also return 
                                                                    //value is specified.
    /*return true; 
    This cannot be asigned because 
    of the specification done upthere,
    the return value has to be "string"*/
    
    return `${name} ${surname}`
}

console.log(getFullName('Jhaco','Delgado'));

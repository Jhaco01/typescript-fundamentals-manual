/*  
    FIFTH CLASS = WORKING WITH THE DOM.

    In this topic, the highest classes of Element and Event, allows you to 
    work almost in the same way that javaScript does it.
*/

const someElement = document.querySelector('.foo'); //Ts can work with DOM elements out of the box 
                                                    //almost in the same way that js do it.

/* console.log(someElement.value); This code cannot be read because ts cannot see what type of 
                                    DOM element is this about, ts only knows data types and this 
                                    one is a generic <Element>, besides that, it do have many of
                                    the properties that js has. */

const otherElement = document.querySelector('div') as HTMLInputElement;
console.log(otherElement.value); //In this case, using type assertion ('as') of the element as an 
                                 //input element, the value property can be read.    

someElement.addEventListener('blur', (e) => { //Here, addEventListener can be used out of the box 
    console.log(e);                           //and the first argument of the callback uses type 
                                              //type event, that extends from a generic superclass 'Event'.

        
    //console.log(e.target.value);              This code cannot be read by the same reason up there,
                                              //type assertion as an input element is needed.
    
    const {value} = e.target as HTMLInputElement;
    console.log(value);
})                                 
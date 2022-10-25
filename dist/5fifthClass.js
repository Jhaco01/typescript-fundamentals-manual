var someElement = document.querySelector('.foo'); 

var otherElement = document.querySelector('div');
console.log(otherElement.value); 

someElement.addEventListener('blur', function (e) {
    console.log(e); 
    
    var value = e.target.value;
    console.log(value);
});

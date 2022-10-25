var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { 
        id: id });
};
var car1 = {
    marca: 'Jack'
};
var music = {
    genre: 'pop'
};
var result = addId(car1).marca; 
var result2 = addId(music).genre; 
console.log('result', result); 
var anyyObject = {
    anyProperty: 'any'
};
addId(anyyObject); 

var addAnotherId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var car2 = {
    marca: 'Jack'
};


var result4 = addAnotherId(car2);

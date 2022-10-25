var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.motherName = 'any';
    }
   
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return User;
}());
var newUser = new User('Jhaco', 'Delgado');

console.log(newUser.getFullName); 
var OtherUser = /** @class */ (function () {
    function OtherUser() {
    }
    OtherUser.prototype.getFirstName = function () {
        return "any";
    };
    OtherUser.maxAge = 50; 
    return OtherUser;
}());
console.log(OtherUser.maxAge); 

var newUserChild = /** @class */ (function (_super) {
    __extends(newUserChild, _super);
    function newUserChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return newUserChild;
}(User));
; 

var any = new newUserChild('any', 'any'); 

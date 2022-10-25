var notEnum = {
    loading: 0,
    inProgress: 1,
    charged: 2
};

var Enum;
(function (Enum) {
    Enum[Enum["Loading"] = 0] = "Loading";
    Enum[Enum["InProgress"] = 1] = "InProgress";
    Enum[Enum["Charged"] = 2] = "Charged"; 
})(Enum || (Enum = {}));
console.log(notEnum.loading);

console.log(Enum.Loading);

var anyVar; 
var Enum2;
(function (Enum2) {
    Enum2["Loading"] = "loading";
    Enum2["InProgress"] = "inProgress";
    Enum2["Charged"] = "charged";
})(Enum2 || (Enum2 = {}));
var anObject = {
    anEnum: Enum2.InProgress
};
console.log(anObject.anEnum); 

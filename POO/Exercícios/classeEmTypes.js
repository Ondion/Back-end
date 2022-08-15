var Person = /** @class */ (function () {
    function Person(n, h, w) {
        this.name = n;
        this.height = h;
        this.weigth = w;
    }
    Person.prototype.sleep = function () {
        console.log("".concat(this.name, " is sleeping..."));
    };
    return Person;
}());
var P1 = new Person('Maria', 171, 58);
var P2 = new Person('João', 175, 66);
console.log(P1.name, P1.height, P1.weigth);
console.log(P2.name, P2.height, P2.weigth);
P1.sleep();
P2.sleep();

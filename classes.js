var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescript version is " + this.version;
    };
    return Typescript;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle(theModel) {
        this.numberOfWheels = 2;
        this.model = theModel;
    }
    return Motorcycle;
}());
//the same code but shorter. Typescript autocreates model in class because we set it inside constructor
// class Motorcycle {
//     readonly numberOfWheels: number = 2
//     constructor(readonly model: string) {}
// }
var Computer = /** @class */ (function () {
    function Computer() {
        this.brand = '';
        this.color = 'silver';
        this.start();
    }
    Computer.prototype.start = function () {
        console.log('Starting');
    };
    return Computer;
}());
var AppleComputer = /** @class */ (function (_super) {
    __extends(AppleComputer, _super);
    function AppleComputer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleComputer.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    return AppleComputer;
}(Computer));
// macbook already doesn't have access to protected property 'brand'
var macbook = new AppleComputer();
macbook.setBrand('Apple');
console.log(macbook.color = 'spacegrey');
//macbook.brand -- can't do that
// -----------
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component is rendering');
    };
    AppComponent.prototype.info = function () {
        return 'This is info';
    };
    return AppComponent;
}(Component));

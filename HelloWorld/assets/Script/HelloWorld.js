var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        var _this = _super.apply(this, arguments) || this;
        _this.fromTypescript = ' From typescript!';
        return _this;
    }
    HelloWorld.prototype.onLoad = function () {
        this.label.string = this.text + this.fromTypescript;
        this.editbox.string = 'editbox';
    };
    HelloWorld.prototype.update = function () {
    };
    HelloWorld.prototype.onButtonClick = function () {
        console.log("editbox.string = " + this.editbox.string);
    };
    return HelloWorld;
}(cc.Component));
__decorate([
    cc.Property(cc.Label)
], HelloWorld.prototype, "label", void 0);
__decorate([
    cc.Property('Hello, World!')
], HelloWorld.prototype, "text", void 0);
__decorate([
    cc.Property(cc.EditBox)
], HelloWorld.prototype, "editbox", void 0);
HelloWorld = __decorate([
    cc.RegisterComponent
], HelloWorld);

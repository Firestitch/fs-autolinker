"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Autolinker = require("autolinker");
var FsAutolinkerDirective = /** @class */ (function () {
    function FsAutolinkerDirective(elementRef) {
        this.elementRef = elementRef;
        this.content = null;
        this.autolinker = null;
        this.defaultConfig = {
            urls: {
                schemeMatches: true,
                wwwMatches: true,
                tldMatches: true
            },
            email: true,
            phone: true,
            mention: false,
            hashtag: false,
            stripPrefix: true,
            stripTrailingSlash: true,
            newWindow: true,
            truncate: {
                length: 0,
                location: 'end'
            },
            className: ''
        };
        this.fsAutolinkerConfig = {};
        this.fsAutolinkerOnReplace = new core_1.EventEmitter();
    }
    FsAutolinkerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.fsAutolinkerConfig = Object.assign({}, this.defaultConfig, this.fsAutolinkerConfig);
        this.fsAutolinkerConfig['replaceFn'] = function (match) {
            _this.fsAutolinkerOnReplace.emit(match);
        };
        this.content = this.elementRef.nativeElement.innerHTML;
        this.autolinker = new Autolinker(this.fsAutolinkerConfig);
        this.elementRef.nativeElement.innerHTML = this.autolinker.link(this.content);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FsAutolinkerDirective.prototype, "fsAutolinkerConfig", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FsAutolinkerDirective.prototype, "fsAutolinkerOnReplace", void 0);
    FsAutolinkerDirective = __decorate([
        core_1.Directive({
            selector: '[fsAutolinker]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FsAutolinkerDirective);
    return FsAutolinkerDirective;
}());
exports.FsAutolinkerDirective = FsAutolinkerDirective;
//# sourceMappingURL=fs-autolinker.directive.js.map
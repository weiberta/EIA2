var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var L10Corona;
(function (L10Corona) {
    var Tkiller = /** @class */ (function (_super) {
        __extends(Tkiller, _super);
        function Tkiller(_position) {
            var _this = _super.call(this, _position) || this;
            _this.velocity.random(20, 50);
            return _this;
        }
        Tkiller.prototype.draw = function () {
            L10Corona.c.save();
            L10Corona.c.beginPath();
            L10Corona.c.translate(this.position.x, this.position.y);
            var r1 = 20;
            var r2 = 35;
            var gradient = L10Corona.c.createRadialGradient(0, 0, r1, 0, 0, r2);
            L10Corona.c.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#000a80");
            gradient.addColorStop(1, "#111111");
            L10Corona.c.fillStyle = gradient;
            L10Corona.c.fill();
            L10Corona.c.closePath();
            L10Corona.c.restore();
        };
        Tkiller.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
        };
        return Tkiller;
    }(L10Corona.Cell));
    L10Corona.Tkiller = Tkiller;
})(L10Corona || (L10Corona = {}));
//# sourceMappingURL=tkiller.js.map
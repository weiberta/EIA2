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
    var Antibody = /** @class */ (function (_super) {
        __extends(Antibody, _super);
        function Antibody(_position) {
            var _this = _super.call(this, _position) || this;
            _this.velocity.random(20, 50);
            _this.rotation = Math.random() * 360;
            return _this;
        }
        Antibody.prototype.draw = function () {
            L10Corona.c.save();
            L10Corona.c.translate(this.position.x, this.position.y);
            L10Corona.c.beginPath();
            L10Corona.c.rotate(this.rotation);
            L10Corona.c.moveTo(0, 0);
            L10Corona.c.lineTo(0, 48);
            L10Corona.c.strokeStyle = "#000aa0";
            L10Corona.c.lineWidth = 4;
            L10Corona.c.stroke();
            L10Corona.c.closePath();
            L10Corona.c.beginPath();
            L10Corona.c.arc(0, 72, 24, 0, Math.PI, true);
            L10Corona.c.stroke();
            L10Corona.c.restore();
        };
        Antibody.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
        };
        return Antibody;
    }(L10Corona.Cell));
    L10Corona.Antibody = Antibody;
})(L10Corona || (L10Corona = {}));
//# sourceMappingURL=antibody.js.map
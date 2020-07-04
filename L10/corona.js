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
    var Corona = /** @class */ (function (_super) {
        __extends(Corona, _super);
        function Corona(_position) {
            var _this = _super.call(this, _position) || this;
            _this.velocity.random(20, 50);
            return _this;
        }
        Corona.prototype.draw = function () {
            L10Corona.c.save();
            L10Corona.c.translate(this.position.x, this.position.y);
            for (var i = 0; i < 6; i++) {
                L10Corona.c.beginPath();
                L10Corona.c.rotate(45.04);
                L10Corona.c.moveTo(0, 5);
                L10Corona.c.lineTo(0, 25);
                L10Corona.c.strokeStyle = "HSL(0, 76%, 47%)";
                L10Corona.c.lineWidth = 4;
                L10Corona.c.stroke();
                L10Corona.c.closePath();
                L10Corona.c.beginPath();
                L10Corona.c.arc(0, 30, 6, 0, 2 * Math.PI);
                L10Corona.c.fillStyle = "HSL(0, 76%, 47%)";
                L10Corona.c.fill();
            }
            L10Corona.c.beginPath();
            L10Corona.c.arc(0, 0, 19, 0, 2 * Math.PI);
            L10Corona.c.fillStyle = "HSL(0, 76%, 47%)";
            L10Corona.c.fill();
            L10Corona.c.closePath();
            L10Corona.c.restore();
        };
        Corona.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
        };
        return Corona;
    }(L10Corona.Cell));
    L10Corona.Corona = Corona;
})(L10Corona || (L10Corona = {}));
//# sourceMappingURL=corona.js.map
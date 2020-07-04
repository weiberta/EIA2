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
    var HumanCell = /** @class */ (function (_super) {
        __extends(HumanCell, _super);
        function HumanCell(_position) {
            var _this = _super.call(this, _position) || this;
            _this.velocity.random(20, 50);
            return _this;
        }
        HumanCell.prototype.draw = function () {
            var r1 = 40;
            var r2 = 70;
            var gradient = L10Corona.c.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "#e1b19f");
            gradient.addColorStop(1, "#57443d");
            L10Corona.c.save();
            L10Corona.c.beginPath();
            L10Corona.c.translate(this.position.x, this.position.y);
            L10Corona.c.fillStyle = gradient;
            //c.clearRect(0,0,innerWidth,innerHeight);
            L10Corona.c.arc(0, 0, r2, 0, 2 * Math.PI);
            //c.strokeStyle = "HSL(0, 76%, 47%)";
            //c.lineWidth = 7;
            L10Corona.c.closePath();
            L10Corona.c.fill();
            L10Corona.c.restore();
        };
        HumanCell.prototype.move = function (_timeslice) {
            _super.prototype.move.call(this, _timeslice);
        };
        return HumanCell;
    }(L10Corona.Cell));
    L10Corona.HumanCell = HumanCell;
})(L10Corona || (L10Corona = {}));
//# sourceMappingURL=humanCell.js.map
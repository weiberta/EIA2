var L10Corona;
(function (L10Corona) {
    var Cell = /** @class */ (function () {
        function Cell(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L10Corona.Vector(0, 0);
            this.velocity = new L10Corona.Vector(0, 0);
        }
        Cell.prototype.draw = function () {
        };
        Cell.prototype.move = function (_timeslice) {
            var offset = new L10Corona.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10Corona.c.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10Corona.c.canvas.height;
            if (this.position.x > L10Corona.c.canvas.width)
                this.position.x -= L10Corona.c.canvas.width;
            if (this.position.y > L10Corona.c.canvas.height)
                this.position.y -= L10Corona.c.canvas.height;
        };
        return Cell;
    }());
    L10Corona.Cell = Cell;
})(L10Corona || (L10Corona = {}));
//# sourceMappingURL=cells.js.map
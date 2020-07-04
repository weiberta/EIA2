namespace L10Corona {
    export class Cell {
        position: Vector;
        velocity: Vector;

        constructor(_position?: Vector) {

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
        }

        draw(): void {
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += c.canvas.width;
            if (this.position.y < 0)
                this.position.y += c.canvas.height;
            if (this.position.x > c.canvas.width)
                this.position.x -= c.canvas.width;
            if (this.position.y > c.canvas.height)
                this.position.y -= c.canvas.height;
        }

    }
}
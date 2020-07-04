namespace L10Corona {
    export class Antibody extends Cell {

        rotation: number;

        constructor(_position?: Vector) {
            super(_position);
            this.velocity.random(20, 50);
            this.rotation = Math.random() * 360
        }

        draw(): void {
            c.save();
            c.translate(this.position.x, this.position.y);
            c.beginPath();
            c.rotate(this.rotation);
            c.moveTo(0, 0);
            c.lineTo(0, 48);
            c.strokeStyle = "#000aa0";
            c.lineWidth = 4;
            c.stroke();
            c.closePath();
            c.beginPath();
            c.arc(0, 72, 24, 0, Math.PI, true);
            c.stroke();
            c.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}

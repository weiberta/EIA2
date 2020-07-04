namespace L10Corona {
    export class Tkiller extends Cell {

        constructor(_position?: Vector) {
            super(_position);
            this.velocity.random(20, 50);
        }

        draw(): void {


            c.save();
            c.beginPath();
            c.translate(this.position.x, this.position.y);

            let r1: number = 20;
            let r2: number = 35;
            let gradient: CanvasGradient = c.createRadialGradient(0, 0, r1, 0, 0, r2);
            c.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#000a80");
            gradient.addColorStop(1, "#111111");
            c.fillStyle = gradient;
            c.fill();

            c.closePath();
            c.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}
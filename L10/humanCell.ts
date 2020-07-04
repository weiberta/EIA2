namespace L10Corona {
    export class HumanCell extends Cell {

        constructor(_position?: Vector) {
            super(_position);
            this.velocity.random(20, 50);
        }

        draw(): void {


            let r1: number = 40;
            let r2: number = 70;
            let gradient: CanvasGradient = c.createRadialGradient(0, 0, r1, 0, 0, r2);

            gradient.addColorStop(0, "#e1b19f");
            gradient.addColorStop(1, "#57443d");

            c.save();
            c.beginPath();
            c.translate(this.position.x, this.position.y);
            c.fillStyle = gradient;
            //c.clearRect(0,0,innerWidth,innerHeight);
            c.arc(0, 0, r2, 0, 2 * Math.PI);
            //c.strokeStyle = "HSL(0, 76%, 47%)";
            //c.lineWidth = 7;
            c.closePath();
            c.fill();
            c.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}
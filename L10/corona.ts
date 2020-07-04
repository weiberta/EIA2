namespace L10Corona {
    export class Corona extends Cell {

        constructor(_position?: Vector) {
            super(_position);
            this.velocity.random(20, 50);
        }
        
        // Aussehen der Viren wurden von Nadine Klinkewitz übernommen !!!
        
        draw(): void {
            c.save();
            c.translate(this.position.x, this.position.y);

            for (let i = 0; i < 6; i++) {
                c.beginPath();
                c.rotate(45.04);
                c.moveTo(0, 5);
                c.lineTo(0, 25);
                c.strokeStyle = "HSL(0, 76%, 47%)";
                c.lineWidth = 4;
                c.stroke();
                c.closePath();
                c.beginPath();
                c.arc(0, 30, 6, 0, 2 * Math.PI);
                c.fillStyle = "HSL(0, 76%, 47%)";
                c.fill();
            }
            c.beginPath();
            c.arc(0, 0, 19, 0, 2 * Math.PI);
            c.fillStyle = "HSL(0, 76%, 47%)";
            c.fill();
            c.closePath();
            c.restore();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}

namespace L10Corona {

    window.addEventListener("load", handleLoad);
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    export let c: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    let cells: Cell[] = [];
    let background: ImageData;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        c = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawHumanCell(9);
        drawTkiller(20);
        drawVirus(20);
        drawAntibody(15);
        window.setInterval(update, 35);
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = c.createLinearGradient(0, 0, 0, c.canvas.height);
        gradient.addColorStop(0, "#fff8dc");
        gradient.addColorStop(0.5, "#e1b19f");
        gradient.addColorStop(1, "#a89b8a");

        c.fillStyle = gradient;
        c.fillRect(0, 0, c.canvas.width, c.canvas.height);

        let pattern: CanvasRenderingContext2D = document.createElement('canvas').getContext('2d');
        pattern.canvas.width = 125;
        pattern.canvas.height = 50;

        pattern.fillStyle = "rgba(255,199,202,0.1)";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 25);
        pattern.lineTo(25, 25);
        pattern.lineTo(50, 0);
        pattern.lineTo(100, 0);
        pattern.lineTo(125, 25); // x + 25
        pattern.lineTo(100, 50);
        pattern.lineTo(50, 50);
        pattern.lineTo(25, 25);
        pattern.strokeStyle = "#929292"; // color of line
        pattern.stroke();

        c.fillStyle = c.createPattern(pattern.canvas, 'repeat');
        c.fillRect(0, 0, canvas.width, canvas.height);

        background = c.getImageData(0, 0, canvas.width, canvas.height);
    }

    function drawHumanCell(_nhumanCell: number): void {
        for (let i: number = 0; i < _nhumanCell; i++) {
            let positionX: number = Math.random() * canvas.width;
            let positionY: number = Math.random() * canvas.height;
            let position: Vector = new Vector(positionX, positionY);
            let humanCell: HumanCell = new HumanCell(position);
            humanCell.draw();
            cells.push(humanCell);
        }
    }

    function drawAntibody(_nAntibody: number): void {
        for (let i: number = 0; i < _nAntibody; i++) {
            let positionX: number = Math.random() * canvas.width;
            let positionY: number = Math.random() * canvas.height;
            let postion: Vector = new Vector(positionX, positionY);
            let antibody: Antibody = new Antibody(postion);
            antibody.draw();
            cells.push(antibody);
        }
    }

    function drawVirus(_nVirus: number): void {
        for (let i: number = 0; i < _nVirus; i++) {
            let positionX: number = Math.random() * c.canvas.width;
            let positionY: number = Math.random() * canvas.height;
            let postion: Vector = new Vector(positionX, positionY);
            let corona: Corona = new Corona(postion);
            corona.draw();
            cells.push(corona);
        }
    }

    function drawTkiller(_nParticle: number): void {
        for (let drawn: number = 0; drawn < _nParticle; drawn++) {
            c.save();
            let positionX: number = Math.random() * canvas.width;
            let positionY: number = Math.random() * canvas.height;
            let position: Vector = new Vector(positionX, positionY);
            let particle: Tkiller = new Tkiller(position);
            particle.draw();
            cells.push(particle);
        }
    }


    function update(): void {
        c.putImageData(background, 0, 0);
        for (let cell of cells) {
            cell.move(1 / 30);
            cell.draw();
        }
    }
}
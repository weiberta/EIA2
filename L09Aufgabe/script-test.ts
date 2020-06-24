namespace L08Coronatime {
    console.log("mrow");

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let c: CanvasRenderingContext2D = canvas.getContext("2d");
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;  // from a tutorial, so no css is needed

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if(!canvas)
            return;
        c = <CanvasRenderingContext2D>canvas.getContext("2d");

    }

    // position, size


    // TISSUE (BACKGROUND)

    drawTissue();

    function drawTissue(): void {
        console.log("Tissue");

        let gradient: CanvasGradient = c.createLinearGradient(0,0,0,c.canvas.height);
        gradient.addColorStop(0,"#fff8dc");
        gradient.addColorStop(0.5,"#e1b19f");
        gradient.addColorStop(1,"#a89b8a");

        c.fillStyle = gradient;
        c.fillRect(0,0,c.canvas.width, c.canvas.height);

        let pattern: CanvasRenderingContext = document.createElement('canvas').getContext('2d');
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

    }

     drawHumanCells({x: 100, y: 100}, {x: 75, y: 75});

    // HUMAN CELLS + VECTOR & SIZE

    function drawHumanCells(_position: Vector, _size: Vector): void {
        console.log("Humanoid", _position, _size);

        for (let i = 0; i < 5; i++) { //max 7 antibodies in this area

            let x = Math.random() * window.innerWidth;
            let y = 100 + (10 * Math.random()); //limits range of antibodies in area
            createHumanoid(x, y);

            if (i < 5) { // max 5 antibodies in this area
                x = Math.random() * window.innerWidth ;
                y = 100 + 20;  //limits range of antibodies in area
                createHumanoid(x, y);
            }

            function createHumanoid(_x: number, _y: number): void {

                let r1: number = 40;
                let r2: number = 70;
                let gradient: CanvasGradient = c.createRadialGradient(0, 0, r1, 0, 0, r2);

                gradient.addColorStop(0, "#e1b19f");
                gradient.addColorStop(1, "#57443d");


                c.beginPath();
                c.save();
                c.translate(_x, _y);
                c.fillStyle = gradient;
                c.arc(0, 0, r2, 0, 2 * Math.PI);
                c.closePath();
                c.fill();
                c.restore();
            }
        }

   /* function drawHumanCells(_position: Vector,_size: Vector): void {
        console.log("HumanCells", _position, _size);

        for (let i = 0; i < 5; i++) {

            let x = Math.random() * window.innerWidth;
            let y = 550 + (20 * Math.random());
            createHumanoid(x, y);

            if (i < 5) { // max 5 antibodies in this area
                x = Math.random() * window.innerWidth;
                y = 600 + (50 * Math.random());
                createHumanoid(x, y);
            }

            function createHumanoid(_x: number, _y: number): void {

                let r1: number = 50;
                let r2: number = 75;
                let gradient1: CanvasGradient = c.createRadialGradient(0, 0, r1, 0, 0, r2);

                gradient1.addColorStop(0, "#e1b19f");
                gradient1.addColorStop(1, "#57443d");

                c.beginPath();
                c.save();
                c.translate(_position.x, _position.y);
                c.fillStyle = gradient1;
                c.arc(0, 0, r2, 0, 2 * Math.PI);;
                c.closePath();
                c.fill();
                c.restore();

            }
        } */

   // CORONAVAYRUS

       /*  drawCoronavayrus ({x: 500, y: 400}, {x: 75, y: 75});

        function drawCoronavayrus(_position, _size): void {
            console.log("coronavayrus", _position, _size);

            c.beginPath();
            c.arc(100, 300, 80, 0, Math.PI * 2, false);
            c.fillStyle = "rgba(155, 0, 0, 1)";
            c.fill();
            c.strokeStyle = "#a40003";
            c.stroke();

            c.beginPath();
            c.arc(400, 300, 80, 0, Math.PI * 2, false);
            c.fillStyle = "rgba(155, 0, 0, 1)";
            c.fill();
            c.strokeStyle = "#a40003";
            c.stroke();

            c.beginPath();
            c.arc(700, 300, 80, 0, Math.PI * 2, false);
            c.fillStyle = "rgba(155, 0, 0, 1)";
            c.fill();
            c.strokeStyle = "#a40003";
            c.stroke();

            c.beginPath();
            c.arc(1000, 300, 80, 0, Math.PI * 2, false);
            c.fillStyle = "rgba(155, 0, 0, 1)";
            c.fill();
            c.strokeStyle = "#a40003";
            c.stroke();

            c.beginPath();
            c.stroke();
            c.arc(1300, 300, 80, 0, Math.PI * 2, false);
            c.fillStyle = "rgba(155, 0, 0, 1)";
            c.fill();
            c.strokeStyle = "#a40003";
            c.stroke();

        } */
    }

    function drawCoronavayrus(cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx * window.innerWidth;
        let y = cy * window.innerHeight;
        let step = Math.PI / spikes;

        ctx.strokeSyle = "#000";
        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#570115';
        ctx.stroke();
        ctx.fillStyle = '#a80054';
        ctx.fill();

    }


    drawCoronavayrus(100, 300, 10, 60, 35);
    drawCoronavayrus(400, 350, 8, 60, 25);
    drawCoronavayrus(700, 300, 10, 60, 35);
    drawCoronavayrus(1000, 350, 8, 60, 25);
    drawCoronavayrus(1300, 300, 10, 60, 35);

   /* drawVirus(200, 300);

    function drawCoronavayrus(_x: number, _y: number): void {
        for (let i = 0; i < 1; i++) { //max 7 antibodies in this area

            let x = 600; // Math.random() * window.innerWidth;
            let y = 300; //300 + (100 * Math.random()); //limits range of antibodies in area
            createVirus(x, y);

            if (i < 5) { // max 5 antibodies in this area
                x = 600;// Math.random() * window.innerWidth * 2;
                y = 300;// 500 + (10 * Math.random());   //limits range of antibodies in area
                createVirus(x, y);
            }

            function createVirus(_x: number, _y: number): void {

        let Corona: Path2D = new Path2D();
        for (let i: number = 0; i < 10; i++) {
            Corona.moveTo(_x + 10, _y - 10;
            Corona.lineTo(_x + 40, _y + 20);

            Corona.moveTo(_x + 5, _y - 5);
            Corona.lineTo(_x - 40, _y - 20);
            Corona.moveTo(_x - 25, _y + 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x + 25, _y - 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x + 25, _y + 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x - 25, _y + 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x - 25, _y - 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x - 40, _y + 20);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x + 40, _y - 20);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x - 25, _y + 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x + 25, _y - 40);
            Corona.lineTo(_x + 5, _y - 5);
            Corona.lineTo(_x + 40, _y - 20);

            c.closePath();
            c.strokeStyle = "#570115";
            c.lineWidth = 5;
            c.fill(Corona);
            c.stroke(Corona);
        }

      /*  let virusOutline: Path2D = new Path2D();
        virusOutline.arc(_x, _y, 30, 0, 4 * Math.PI);
        c.fillStyle = "rgb(168,0,84)";
        c.fill(virusOutline);
        c.stroke(virusOutline);

        let virus: Path2D = new Path2D();
        virus.arc(_x, _y, 20, 0, 2 * Math.PI);
        c.fillStyle = "rgb(225,4,0)";
        c.fill(virus);
        c.stroke(virus);
    }*/


        drawAntibodies({x: 300, y: 300}, {x: 75, y: 75});

        // ANTIBODIES + VECTOR & SIZE

        function drawAntibodies(_position: Vector, _size: Vector): void {
            console.log("Coronoavayrus", _position, _size);

            for (let i = 0; i < 7; i++) { //max 7 antibodies in this area

                let x = Math.random() * window.innerWidth / 1.7; // divides range of spread by 1.7
                let y = 550 + (20 * Math.random()); //limits range of antibodies in area
                createAntis(x, y);

                if (i < 5) { // max 5 antibodies in this area
                    x = Math.random() * window.innerWidth / 2;
                    y = 700 + (20 * Math.random());   //limits range of antibodies in area
                    createAntis(x, y);
                }

                function createAntis(_x: number, _y: number): void {

                    c.save();
                    c.translate(_x, _y);
                    c.beginPath();
                    c.rotate(Math.random() * 360);
                    c.moveTo(0, 0);
                    c.lineTo(0, 48);
                    c.strokeStyle = "#000aa0";
                    c.lineWidth = 4;
                    c.stroke();
                    c.closePath();
                    c.beginPath();
                    c.arc(0, 72, 24, 0, 1 * Math.PI, true);
                    c.stroke();
                    c.restore();


                }


// T Killer

                drawTKiller({x: 900, y: 600}, {x: 55, y: 55});

                // T-KILLER + VECTOR & SIZE

                // HUMAN CELLS + VECTOR & SIZE

                function drawTKiller(_position: Vector, _size: Vector): void {
                    console.log("TKiller", _position, _size);

                    for (let i = 0; i < 1; i++) { //max 7 antibodies in this area

                        let x = Math.random() * window.innerWidth;
                        let y = 600 + (100 * Math.random()); //limits range of antibodies in area
                        createTKills(x, y);

                        if (i < 5) { // max 5 antibodies in this area
                            x = Math.random() * window.innerWidth * 2;
                            y = 500 + (10 * Math.random());   //limits range of antibodies in area
                            createTKills(x, y);
                        }

                        function createTKills(_x: number, _y: number): void {

                            let r1: number = 20;
                            let r2: number = 35;
                            let gradient: CanvasGradient = c.createRadialGradient(0, 0, r1, 0, 0, r2);

                            gradient.addColorStop(0, "#000a80");
                            gradient.addColorStop(1, "#111111");


                            c.beginPath();
                            c.save();
                            c.translate(_x, _y);
                            c.fillStyle = gradient;
                            c.arc(0, 0, r2, 0, 2 * Math.PI);
                            c.closePath();
                            c.fill();
                            c.restore();
                        }


                        // FUNCTIONS


// end Namespace

                    }
                }
            }
        }

    }
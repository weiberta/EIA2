namespace Canvas {

    console.log("mrow");
//searching html until html-element "canvas" is found
// its then placed into the canvas variable
    let canvas: HTMLCanvasElement = document.querySelector("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;  // from a tutorial, so no css is needed

// c within canvas stands for context
// returning a drawing context to a var called c
    let c: CanvasRenderingContext2D = canvas.getContext("2d");

    window.addEventListener("load", createImage);
    window.addEventListener("resize", createImage);

    function createImage(): void {
        createBackground();
    }


    // TISSUE
    function createBackground(): void {

    }

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



    /*
    // RECTANGLES
    c.fillStyle = "rgba(155, 0, 0, 0.2)"; // changes color for filled rectangles,
                  // red, green, blue, alpha (last value = opacity from 0.1 - 1)
    c.fillRect(100, 100, 100, 100); // x, y, width, height

    c.fillStyle = "rgba(0, 190, 50, 0.2)";
    c.fillRect(350, 350, 100, 100);

    c.fillStyle = "rgba(0, 0, 155, 0.2)";
    c.fillRect(500, 50, 100, 100);
    console.log(canvas);
    */

    /*
    // LINES
    c.beginPath(); // implies that we want to start a line.. but where?
    c.moveTo(50, 300);
    c.lineTo(300, 100); // first line
    c.lineTo(400, 300); // second line
    //c.lineTo(50, 300);  // third line > triangle!!, start = end
    c.strokeStyle = "#000bff"; // sets color of line

    c.stroke();  // stroke-method = line from point to point
    */


    drawVirus(500,600);

// ARC
// (+ creating circles with arcs)
    function drawVirus(_x: number, _y: number): void {

*/
        c.beginPath();
        c.arc(300, 300, 60, 0, Math.PI * 2, false);
        c.fillStyle = "rgba(155, 0, 0, 0.5)";

// startAngle: at what angle start to draw arc ?, endAngle: how long would we like the arc to go on for?
        c.strokeStyle = "#a40003";
        c.stroke();

// to multiply forms without copy-pasting the code = if-cause
// repeat loop as long as i is less than 5, add 1 each time


// < 10 = 10 circles, <100 = 100 circles
        for (let i = 0; i < 10; i++) {
            // change x + y for different positions in loop !!
            let x: number = Math.random() * window.innerWidth;
            let y: number = Math.random() * window.innerHeight; // returns random value from 0 to 1

            c.beginPath();
            c.arc(x, y, 60, 0, Math.PI * 2, false);
// startAngle: at what angle start to draw arc ?, endAngle: how long would we like the arc to go on for?

            c.strokeStyle = "#a40003";
            c.stroke();
        }

    }





// ANTIBODIES

    for (let i = 0; i < 7; i++) { //max 7 antibodies in this area

        let x = Math.random() * window.innerWidth / 1.5; // divides range of spread by 2
        let y = 550 + (20 * Math.random()); //limits range of antibodies in area
        createAntibodies(x, y);

        if (i < 5) { // max 5 antibodies in this area
            x = Math.random() * window.innerWidth / 2;
            y = 700 + (20 * Math.random());   //limits range of antibodies in area
            createAntibodies(x, y);
        }

        function createAntibodies(_x: number, _y: number): void {

            c.save();
            c.translate(_x, _y);
            c.beginPath();
            c.rotate(Math.random() * 360);
            c.moveTo(0, 0);
            c.lineTo(0, 48);
            c.strokeStyle = "#114d89"
            c.lineWidth = 3;
            c.stroke();
            c.closePath();
            c.beginPath();
            c.arc(0, 72, 24, 0, 1 * Math.PI, true);
            c.stroke();
            c.restore();
            // multiply lineTo y, y and radius by n to resize
        }

        /*
            c.beginPath(); // implies that we want to start a line.. but where?
            c.moveTo(50, 300);
            c.lineTo(300, 100);
            c.stroke();
        */

    }

}
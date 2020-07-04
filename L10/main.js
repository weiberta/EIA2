var L10Corona;
(function (L10Corona) {
    window.addEventListener("load", handleLoad);
    L10Corona.canvas = document.querySelector("canvas");
    L10Corona.c = L10Corona.canvas.getContext("2d");
    var cells = [];
    var background;
    L10Corona.canvas.width = window.innerWidth;
    L10Corona.canvas.height = window.innerHeight;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10Corona.c = canvas.getContext("2d");
        drawBackground();
        drawHumanCell(9);
        drawTkiller(20);
        drawVirus(20);
        drawAntibody(15);
        window.setInterval(update, 35);
    }
    function drawBackground() {
        var gradient = L10Corona.c.createLinearGradient(0, 0, 0, L10Corona.c.canvas.height);
        gradient.addColorStop(0, "#fff8dc");
        gradient.addColorStop(0.5, "#e1b19f");
        gradient.addColorStop(1, "#a89b8a");
        L10Corona.c.fillStyle = gradient;
        L10Corona.c.fillRect(0, 0, L10Corona.c.canvas.width, L10Corona.c.canvas.height);
        var pattern = document.createElement('canvas').getContext('2d');
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
        L10Corona.c.fillStyle = L10Corona.c.createPattern(pattern.canvas, 'repeat');
        L10Corona.c.fillRect(0, 0, L10Corona.canvas.width, L10Corona.canvas.height);
        background = L10Corona.c.getImageData(0, 0, L10Corona.canvas.width, L10Corona.canvas.height);
    }
    function drawHumanCell(_nhumanCell) {
        for (var i = 0; i < _nhumanCell; i++) {
            var positionX = Math.random() * L10Corona.canvas.width;
            var positionY = Math.random() * L10Corona.canvas.height;
            var position = new L10Corona.Vector(positionX, positionY);
            var humanCell = new L10Corona.HumanCell(position);
            humanCell.draw();
            cells.push(humanCell);
        }
    }
    function drawAntibody(_nAntibody) {
        for (var i = 0; i < _nAntibody; i++) {
            var positionX = Math.random() * L10Corona.canvas.width;
            var positionY = Math.random() * L10Corona.canvas.height;
            var postion = new L10Corona.Vector(positionX, positionY);
            var antibody = new L10Corona.Antibody(postion);
            antibody.draw();
            cells.push(antibody);
        }
    }
    function drawVirus(_nVirus) {
        for (var i = 0; i < _nVirus; i++) {
            var positionX = Math.random() * L10Corona.c.canvas.width;
            var positionY = Math.random() * L10Corona.canvas.height;
            var postion = new L10Corona.Vector(positionX, positionY);
            var corona = new L10Corona.Corona(postion);
            corona.draw();
            cells.push(corona);
        }
    }
    function drawTkiller(_nParticle) {
        for (var drawn = 0; drawn < _nParticle; drawn++) {
            L10Corona.c.save();
            var positionX = Math.random() * L10Corona.canvas.width;
            var positionY = Math.random() * L10Corona.canvas.height;
            var position = new L10Corona.Vector(positionX, positionY);
            var particle = new L10Corona.Tkiller(position);
            particle.draw();
            cells.push(particle);
        }
    }
    function update() {
        L10Corona.c.putImageData(background, 0, 0);
        for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
            var cell = cells_1[_i];
            cell.move(1 / 30);
            cell.draw();
        }
    }
})(L10Corona || (L10Corona = {}));
//# sourceMappingURL=main.js.map
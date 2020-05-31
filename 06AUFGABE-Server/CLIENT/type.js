"use strict";
var Coronahilfe;
(function (Coronahilfe) {
    window.addEventListener("load", handleLoad);
    let form; //globaler kontext
    // let url: string = "HTML.html";
    let url = "https://kisjasserver.herokuapp.com/";
    async function handleLoad(_event) {
        console.log("Start");
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer); // für generateContent
        // GENERATECONTENT
        Coronahilfe.generateContent(data);
        form = document.querySelector("form");
        let slider = document.querySelector("input#amount");
        let submit = document.querySelector("button[type=button]");
        let deletebutton = document.querySelector("button#delete");
        //let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#button");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);
        deletebutton.addEventListener("click", deleteData);
        displayOrder();
    }
    function deleteData() {
        let order = document.querySelector("div#order");
        order.innerHTML = "";
    }
    async function sendOrder(_event) {
        console.log(" Deine Bestellung wurde erfolgreich versendet. ");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        //await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
    function handleChange(_event) {
        displayOrder();
    }
    // In 05 neu implementiert, da ich diese bei 04 überhaupt nicht drin hatte?? trotz Coding nach Tutorial
    // Davor hatte ich die obere, auskommentierte Version
    function displayOrder() {
        // order.innerHTML += item.value + " " + price + " €  "
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(form);
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            // console.log(entry[1]);
            let item = document.querySelector(selector);
            if (item == null)
                continue;
            let itemPrice = Number(item.getAttribute("price"));
            switch (entry[1]) {
                case "Produkte":
                    order.innerHTML += "<br>" + entry[0] + ":" + "<br>" + item.value + "<br>";
                    break;
                case "Bankautomat":
                    break;
                default:
                    order.innerHTML += "<br>" + entry[0] + ":" + "<br>" + item.value + ": €" + "  " + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
            // order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
        }
        order.innerHTML += "<p> <strong>Die Gesamtsumme beträgt:    " + price.toFixed(2) + "  €";
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(Coronahilfe || (Coronahilfe = {}));
//# sourceMappingURL=type.js.map
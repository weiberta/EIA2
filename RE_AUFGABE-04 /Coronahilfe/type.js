"use strict";
var Coronahilfe;
(function (Coronahilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        // GENERATECONTENT
        Coronahilfe.generateContent(Coronahilfe.data);
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        let button = document.querySelector("#button");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        button.addEventListener("click", submitData);
    }
    function submitData(_event) {
        alert("Deine Besellung wurde versendet");
        console.log("Bestellung versendet");
    }
    function handleChange(_event) {
        let order = document.querySelector("div#order");
        order.innerHTML = " ";
        let formData = new FormData(document.forms[0]);
        // Hier befindet sich ein Fehler, den ich nicht herausbekommen
        // type = NULL ??
        // for (let entry of formData.toString()) {
        // for (let entry of typeof formData) {
        for (let entry of formData) {
            //console.log(entry);
            let item = document.querySelector("[value='" + entry[1] + "']");
            // console.log(item);
            let price = Number(item.getAttribute("price"));
            // console.log(price);
            order.innerHTML += item.value + " " + price + " €  ";
        }
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
    // DELETE ORDER BUTTON
    //  function deleteOrder(_event: Event): void {
    //      let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
    //     order.innerHTML = "";
    //    console.log("Die Besellung wurde gelöscht.");
    // }
})(Coronahilfe || (Coronahilfe = {}));
//# sourceMappingURL=type.js.map
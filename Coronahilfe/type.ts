namespace Coronahilfe {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#button");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        button.addEventListener("click", submitData);
    }

    function submitData (_event: Event): void {
        alert("Deine Besellung wurde versendet");
        console.log("Bestellung versendet");
    }

    function handleChange(_event: Event): void {

        // console.log(_event);
        // let Produkt: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        // console.log(Produkt.value);

        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML= " ";


        let formData: FormData = new FormData(document.forms[0]);
        // console.log(formData);

        // Hier befindet sich ein Fehler, den ich nicht herausbekommen > hats repariert
        // for (let entry of formData.toString()) {
        // for (let entry of typeof formData) {

        for (let entry of formData) {
            //console.log(entry);
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            // console.log(item);
            let price: number = Number(item.getAttribute("price"));
            // console.log(price);

            order.innerHTML += item.value + " " + price + " €  "


        }
    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);

    }
}


// let formData: FormData = new FormData(document.forms[0]);
// console.log(formData.get("Drink"));
// for (let entry of formData) {
//     console.log(entry);
//     console.log("name: " + entry[0]);
//     console.log("value: " + entry[1]);
// }
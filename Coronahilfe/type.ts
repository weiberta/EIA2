namespace Coronahilfe {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");

        // GENERATECONTENT

       generateContent(data);



        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#button");



        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        button.addEventListener("click", submitData);

    }

    function submitData(_event: Event): void {
        alert("Deine Besellung wurde versendet");
        console.log("Bestellung versendet");
    }

    function handleChange(_event: Event): void {

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = " ";

        let formData: FormData = new FormData(document.forms[0]);


        // Hier befindet sich ein Fehler, den ich nicht herausbekommen
        // type = NULL ??
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


// DELETE ORDER BUTTON

   //  function deleteOrder(_event: Event): void {
  //      let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
   //     order.innerHTML = "";
   //    console.log("Die Besellung wurde gelöscht.");
   // }

}

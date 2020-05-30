namespace Coronahilfe {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;  //globaler kontext


    async function handleLoad(_event: Event): Promise<void> {
        console.log("Start");

        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer); // für generateContent

        // GENERATECONTENT
       generateContent(data);

       form = <HTMLFormElement>document.querySelector("form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        let deletebutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#delete");


        //let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#button");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);
        deletebutton.addEventListener("click", deleteData);

       displayOrder();
    }

    function deleteData(): void {

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";
    }

    async function sendOrder(_event: Event): Promise<void> {
        console.log(" Deine Bestellung wurde erfolgreich versendet. ");
        let formData : FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("HTML.html?" + query.toString());
        alert("Deine Besellung wurde versendet");
    }

    //function handleChange(_events: Event): void {
     //   displayOrder();
    //   }

    // DISPLAY ORDER NEU

    // function displayOrder(): void {
    //  let price: number = 0;
    //  let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
    //  order.innerHTML =" ";
    // }

   //  let formData : FormData = new FormData(<HTMLFormElement>document.querySelector("form"));

    // for (let entry of formData) {
     //    let selector:string = "[value='" + entry[1] +"']"; // "[name= "'+ entry[0] + "'][value='" + entry[]
     //   let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
    //   }


    function handleChange(_event: Event) {
        displayOrder();
    }

    // In 05 neu implementiert, da ich diese bei 04 überhaupt nicht drin hatte?? trotz Coding nach Tutorial
    // Davor hatte ich die obere, auskommentierte Version

    function displayOrder(): void {
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
            switch (entry[0]) {
                case "Produkte":
                    order.innerHTML += "<br>" + entry[0] +":" + "<br>" + item.value + "<br>";
                    break;
                case "Bankautomat":
                    break;
                default:
                    order.innerHTML += "<br>" + entry[0] + ":" +"<br>" + item.value + ": €" + "  " + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
            // order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
        }
        order.innerHTML += "<p> <strong>Die Gesamtsumme beträgt:    " + price.toFixed(2) + "  €";
    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);

    }


    // ---------- BUTTONS



// DELETE ORDER BUTTON

   //  function deleteOrder(_event: Event): void {
  //      let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
   //     order.innerHTML = "";
   //    console.log("Die Besellung wurde gelöscht.");
   // }

}

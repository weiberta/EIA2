namespace Coronahilfe {

    export function generateContent(_data: Data): void {
        for (let category in _data) {
            // console.log(_data);

            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;

            switch (category) {
                case "Produkt":
                    group = createMultiple(items, category);
                    break;
                case "Geschaefte":
                    group = createSelect(items, category);
                    break;
                case "Hausarbeiten":
                    group = createMultiple(items, category);
                    break;
                case "Bankautomat":
                    group = createSelect(items, category);
                    break;

                default:
                    break;
            }


            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)

                fieldset.appendChild(group);
                // fieldset.insertBefore(group, fieldset.childNodes[0]);


        }
    }


        // EINFACHAUSWAHL, Code von SelectMultiple genommen und an
        // radio umgeschrieben


    export function createSelect(_items:  Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");



        for (let item of _items) {
            let radio: HTMLInputElement= document.createElement("input");
            radio.type= "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;

            let lable: HTMLLabelElement = document.createElement("lable");
            lable.textContent = item.name;
            lable.htmlFor = item.name;

            let br: HTMLBRElement = document.createElement("br");

            group.appendChild(radio);
            group.appendChild(lable);
            group.appendChild(br);
        }

        return group;

        }

        // MULTIPLE - Mehrfachwahl

        function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement= document.createElement("input");
            checkbox.type= "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let lable: HTMLLabelElement = document.createElement("lable");
            lable.textContent = item.name;
            lable.htmlFor = item.name;

            let br: HTMLBRElement = document.createElement("br");

            group.appendChild(checkbox);
            group.appendChild(lable);
            group.appendChild(br);
        }

        return group;
    }



}
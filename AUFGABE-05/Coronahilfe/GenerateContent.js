"use strict";
var Coronahilfe;
(function (Coronahilfe) {
    // Datenbank export hier implementiert
    // Datenbank export hier implementiert
    function generateContent(_data) {
        for (let category in _data) {
            // console.log(_data);
            let items = _data[category];
            let group = null;
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
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
            // fieldset.insertBefore(group, fieldset.childNodes[0]);
        }
    }
    Coronahilfe.generateContent = generateContent;
    // EINFACHAUSWAHL, Code von SelectMultiple genommen und an
    // radio umgeschrieben
    function createSelect(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
            let lable = document.createElement("lable");
            lable.textContent = item.name;
            lable.htmlFor = item.name;
            let br = document.createElement("br");
            group.appendChild(radio);
            group.appendChild(lable);
            group.appendChild(br);
        }
        return group;
    }
    Coronahilfe.createSelect = createSelect;
    // MULTIPLE - Mehrfachwahl
    function createMultiple(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let lable = document.createElement("lable");
            lable.textContent = item.name;
            lable.htmlFor = item.name;
            let br = document.createElement("br");
            group.appendChild(checkbox);
            group.appendChild(lable);
            group.appendChild(br);
        }
        return group;
    }
})(Coronahilfe || (Coronahilfe = {}));
//# sourceMappingURL=GenerateContent.js.map
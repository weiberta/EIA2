namespace Coronahilfe {

    export interface Item {
        name: string;
        price: number;
        einheit: string;
    }

    export interface Data  {
        [category: string]: Item[];
    }


    export let data: Data = {
        Produkt: [
            {name: "Brot", price: 2.50, einheit: "Stück"},
            {name: "Milch", price: 1, einheit: "Liter"},
            {name: "Gemüse", price: 3.00, einheit: "Stück"},
            {name: "Desinfektionsmittel", price: 10, einheit: "Packung"},
            {name: "Klopapier", price: 5, einheit: "Packung"}
        ],

        Geschaefte: [
            {name: "Edeka", price: 0, einheit: ""},
            {name: "Lidl", price: 0, einheit: ""},
            {name: "Aldi", price: 0, einheit: ""},
            {name: "Rewe", price: 0, einheit: ""}

        ],

        Hausarbeiten: [
            {name: "Staubsaugen", price: 10, einheit: "€"},
            {name: "Zimmer putzen", price: 10.00, einheit: "€"},
            {name: "Fenster putzen", price: 15.00, einheit: "€"}
        ],

        Bankautomat: [
            {name: "Bar", price: 0, einheit: "€"},
            {name: "Karte", price: 0, einheit: "€"},

        ]


    };


}
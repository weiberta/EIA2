var shopper = {
    //arrays
    items : [],
    jobs : [],
    money : [],

    //Die 3 Funktionen ordnen in die jeweiligen arrays ein (Auftrag)
    addArtikel : function (evt) {

        evt.preventDefault();

        var item = document.getElementById('add-item');
        var einheit = document.getElementById('einheit');
        var menge = document.getElementById('menge');
        var laden = document.getElementById('laden');

        //artikel in array pushen   // Objekt aus Funktion add Artikel
        shopper.items.push({
            name : item.value,
            menge : menge.value,
            einheit: einheit.value,
            laden : laden.value
        });
        // vars auf null setzen
        item.value = "";
        einheit.value = "";
        menge.value = "";
        laden.value = "";


        shopper.draw();
        shopper.save();
    },

    addJob : function (evt) {

        evt.preventDefault();
        var job = document.getElementById('job');

        shopper.jobs.push({
            job : job.value
        });

        job.value = "";

        shopper.draw();
        shopper.save();
    },

    addMoney : function (evt) {

        evt.preventDefault();

        var money = document.getElementById('money');
        var value = document.getElementById('value');

        shopper.money.push({
            money : money.value,
            value : value.value
        });

        money.value = "";
        value.value = "";

        shopper.draw(); // Anzeige wird neu gezeichnet (hinzufügen > neues div wird gezeichnet
        shopper.save();
    },

    draw : function () {

        var container = document.getElementById('shop-list');
        container.innerHTML = "";

        if (shopper.items.length > 0) {
            var row = "", button = "";
            for (let i in shopper.items) {
                //Artikel
                row = document.createElement("div"); //innerHTML = man schreibt in ein Element mit der id
                row.innerHTML = shopper.items[i].menge + " " + shopper.items[i].einheit + " " + shopper.items[i].name + "  von "  + shopper.items[i].laden;
                container.appendChild(row);

                //Löschen
                row = document.createElement("div");
                button = document.createElement("input");
                button.type = "button";
                button.value = "Löschen";
                button.dataset.id = i;    // teilt Button dem div zu
                button.addEventListener("click", shopper.delete);
                row.appendChild(button);
                container.appendChild(row);
            }
        }

        if (shopper.jobs.length > 0) { // wenn etw. im Array ist, wird es ausgeführt
            var row = "", button = "";
            for (let i in shopper.jobs) {
                //Job
                row = document.createElement("div");
                row.innerHTML =shopper.jobs[i].job;
                container.appendChild(row);

                // Delete button
                row = document.createElement("div");
                button = document.createElement("input");
                button.type = "button";
                button.value = "Delete";
                button.dataset.id = i;
                button.addEventListener("click", shopper.deleteJob);
                row.appendChild(button);
                container.appendChild(row);
            }
        }

        if (shopper.money.length > 0) {
            var row = "", button = "";
            for (let i in shopper.money) {
                //Money
                row = document.createElement("div");
                row.innerHTML = shopper.money[i].value + " Euro " + shopper.money[i].money;
                container.appendChild(row);

                // Delete button
                row = document.createElement("div");
                button = document.createElement("input");
                button.type = "button";
                button.value = "Delete";
                button.dataset.id = i;
                button.addEventListener("click", shopper.deleteMoney);
                row.appendChild(button);
                container.appendChild(row);
            }
        }
    },
// Aufgabe 04 - Shoppingliste als json im Lokalspeicher
    save : function () {


        // Init localstorage
        if (localStorage.items == undefined) { localStorage.items = "[]"; }
        if (localStorage.jobs == undefined) { localStorage.jobs = "[]"; }
        if (localStorage.money == undefined) { localStorage.money = "[]"; }

        // Save current arrays localstorage // Wird in einen string umgewandelt
        localStorage.items = JSON.stringify(shopper.items);
        localStorage.jobs = JSON.stringify(shopper.jobs);
        localStorage.money = JSON.stringify(shopper.money);
        },

    load : function () {
        if (localStorage.items == undefined) { localStorage.items = "[]"; }
        if (localStorage.jobs == undefined) { localStorage.jobs = "[]"; }
        if (localStorage.money == undefined) { localStorage.money = "[]"; }

        shopper.items = JSON.parse(localStorage.items);
        shopper.jobs = JSON.parse(localStorage.jobs);
        shopper.money = JSON.parse(localStorage.money);

        shopper.draw();
    },


    delete : function () {
        if (confirm("Artikel entfernen?")) {
            shopper.items.splice(this.dataset.id, 1);
            shopper.save();
            shopper.draw();
        }
    },

    deleteJob : function () {
        if (confirm("Job entfernen?")) {
            shopper.jobs.splice(this.dataset.id, 1);
            shopper.save();
            shopper.draw();
        }
    },

    deleteMoney : function () {
        if (confirm("Auftrag entfernen?")) {
            shopper.money.splice(this.dataset.id, 1);
            shopper.save();
            shopper.draw();
        }
    }
};



window.addEventListener("load", function () {
    shopper.load();
    document.getElementById("shop-add").addEventListener("submit", shopper.addArtikel);
    document.getElementById("job-add").addEventListener("submit", shopper.addJob);
    document.getElementById("money-add").addEventListener("submit", shopper.addMoney);
});

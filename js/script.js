window.onload = function() {
    drawList();
};

let give = ['Günel', 'Məhəmməd', 'Həmidə', 'Fidan'];
let receive = give.concat();
let peopleWrap = document.getElementById('peopleWrap');
let people = document.getElementById('people');
let choose = document.getElementById('choose');
let result = document.getElementById('result');
let close = document.getElementById('close');

function drawList() {
    people.innerHTML = '<option value="">Kimsiniz?</option>';
    for (let i = give.length - 1; i >= 0; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = give[i];
        people.appendChild(option);
    }
}

function selectPerson(person) {
    let name = give[person];
    let nameIndex = receive.indexOf(name);

    if (nameIndex >= 0) {
        receive.splice(nameIndex, 1);
    }
    let recipient = Math.floor((Math.random() * receive.length));
    let recipientName = receive[recipient];

    receive.splice(recipient, 1);
    give.splice(person, 1);

    if (nameIndex >= 0) {
        receive.push(name);
    }
    result.innerHTML = "<h2>" + name + ", alacağın hədiyyənin sahibi " + recipientName + "dir!</h2>";
    close.innerHTML = "OK";
    if (give.length > 0) {
        drawList();
    }
}

choose.onclick = function() {
    if (people.value) {
        selectPerson(people.value);
    }
};

close.onclick = function() {
    result.innerHTML = "";
    close.innerHTML = "";
    if (give.length == 0) {
        peopleWrap.parentNode.removeChild(peopleWrap);
        choose.parentNode.removeChild(choose);
        result.innerHTML = "<h2>Siyahı tamamlandı!</h2>";
        close.innerHTML = "";
    }
};

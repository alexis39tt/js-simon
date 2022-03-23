function Numeri() {
    let nums = [];
    for (i = 0; i < 5; i++) {
        nums.push(Math.round(Math.random() * 100));
    }
    return nums;
}

function AddToPage(nums) {
    container.innerHTML = "";
    for (i = 0; i < 5; i++) {
        container.innerHTML += `<div><h1>${nums[i]}</h1></div>`;
    }
}

function Clock() {
    let clock = document.getElementById("clock");
    sec = 29;
    clock.innerHTML = "<h1>00:29</h1>";
    setInterval(() => {
        sec--;
        if (sec < 0) {
            clock.innerHTML = "";
            return;
        }
        else if (sec < 10) {
            clock.innerHTML = `<h1>00:0${sec}</h1>`;
        }
        else {
            clock.innerHTML = `<h1>00:${sec}</h1>`;
        }
    }, 1000);
}

function RemoveFromPage() {
    container.innerHTML = "";
}

function StartPrompt(nums) {
    let guessed = [];
    let not_guessed = [];
    for (i = 0; i < 5; i++) {
        let input = parseInt(prompt(`Inserisci il ${i + 1}° numero`))
        if (input == nums[i]) {
            guessed.push(nums[i])
        }
        else {
            not_guessed.push(nums[i])
        }
    }
    result.innerHTML += `<div class="result1"><h1>Indovinati: ${guessed}</h1></div>`;
    result.innerHTML += `<div class="result2"><h1>Sbagliati: ${not_guessed}</h1></div>`;
}

let container = document.getElementById("container");
let result = document.getElementById("result");
let button = document.getElementById("button");

button.addEventListener("click", function () {
    let nums = Numeri();
    AddToPage(nums);
    Clock();
    setTimeout(() => {
        RemoveFromPage();
    }, 29500);
    setTimeout(() => {
        StartPrompt(nums);
    }, 30000);
})
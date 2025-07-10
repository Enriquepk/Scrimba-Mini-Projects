let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("count-el")

function increment() {
    count += + 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}

function reset() {
    resetEl.textContent = 0
    count = 0
}
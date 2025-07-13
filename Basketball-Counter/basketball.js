let countHome = 0
let countGuest = 0
let countElHome = document.getElementById("count-el-home")
let countElGuest = document.getElementById("count-el-guest")

function increment1home() {
    countHome +=  1
    countElHome.textContent = countHome
}

function increment2home() {
    countHome +=  2
    countElHome.textContent = countHome
}

function increment3home() {
    countHome +=  3
    countElHome.textContent = countHome
}

function increment1guest() {
    countGuest +=  1
    countElGuest.textContent = countGuest
}

function increment2guest() {
    countGuest +=  2
    countElGuest.textContent = countGuest
}

function increment3guest() {
    countGuest +=  3
    countElGuest.textContent = countGuest
}

function resetscore() {
    countElHome.textContent = 0
    countHome = 0
    countElGuest.textContent = 0
    countGuest = 0
}


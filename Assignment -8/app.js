var min = 0
var sec = 0
var ms = 0
var getMin = document.getElementById("min")
var getSec = document.getElementById("sec")
var getMs = document.getElementById("ms")
var interval

function millisecond() {
    ms++
    getMs.innerHTML = ms

    if (ms >= 100) {
        sec++
        getSec.innerHTML = sec
        ms = 0
    }

    if (sec >= 60) {
        min++
        getMin.innerHTML = min
        sec = 0
    }
}


function start() {
    interval = setInterval(millisecond, 10);
    document.getElementById("start").disabled = true
}

function pause() {
    clearInterval(interval)
    document.getElementById("start").disabled = false
}

function reset() {
    getMin.innerHTML = "00"
    getSec.innerHTML = "00"
    getMs.innerHTML = "00"
    pause()
    document.getElementById("start").disabled = false
}
let conter = 0;

function updateCounter() {
    document.getElementById('counter').textContent = conter;
}

function Increase() {
    conter++;
    updateCounter();
}

function Decrease() {
    conter--;
    updateCounter();
}

function Reset() {
    conter = 0;
    updateCounter();
}

updateCounter();
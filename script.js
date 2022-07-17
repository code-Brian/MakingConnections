console.log("page loaded...");

/* Query selectors */
let userName = document.getElementById("user-name");
let userSettings = document.getElementById("user-settings");
let todd0 = document.getElementById("0-todd");
let phil1 = document.getElementById("1-phil");
let accept0 = document.getElementById("0-accept");
let close0 = document.getElementById("0-close");
let accept1 = document.getElementById("1-accept");
let close1 = document.getElementById("1-close");
let requestsBadge = document.getElementById("cr-badge");
let connectionsBadge = document.getElementById("connections");


/* Event Listeners */
userSettings.addEventListener("click", () => {
    userName.textContent = prompt("What is your name?");
});

accept0.addEventListener("click", () => {
    addConnection();
    removeRequest(todd0);
});

close0.addEventListener("click", () => {
    removeRequest(todd0);
});

accept1.addEventListener("click", () => {
    addConnection();
    removeRequest(phil1);
});

close1.addEventListener("click", () => {
    removeRequest(phil1);
});

/* Logic for Connection Requests */
function removeRequest(id) {
    id.remove();
    requestsBadge.textContent--;
}

function addConnection() {
    console.log()
    connectionsBadge.textContent++;
}
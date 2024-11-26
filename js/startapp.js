function checkStartAppParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const startapp = urlParams.get('startapp');
    console.log("startapp:", startapp); // Debugging line to see if startapp is extracted correctly.
    document.getElementById("userGreeting").innerText = startapp || "No startapp param found";
    if (startapp) {
        window.location.href = `room.html?startapp=${encodeURIComponent(startapp)}`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkStartAppParam();
});

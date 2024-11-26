// startapp.js

// Function to check the startapp URL parameter and redirect if needed
function checkStartAppParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const startapp = urlParams.get('startapp');
    
    // For debugging, you can see if the startapp value is retrieved correctly
    console.log("StartApp param:", startapp); 

    if (startapp) {
        document.getElementById("userGreeting").innerText = `StartApp param: ${startapp}`;
        // Redirect to room.html with the startapp value
        window.location.href = `room.html?startapp=${encodeURIComponent(startapp)}`;
    } else {
        document.getElementById("userGreeting").innerText = "No startapp param found";
    }
}

// Wait until DOM content is loaded and then execute the function
document.addEventListener("DOMContentLoaded", function() {
    checkStartAppParam();
});

const app = document.getElementById('app');

function sendTouchCoordinates(userId, x, y) {
    db.collection("touches").add({
        userId: userId,
        x: x,
        y: y,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
}

app.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];

    const electricDiv = document.createElement('div');
    electricDiv.classList.add('electric');
    electricDiv.style.left = touch.pageX + 'px';
    electricDiv.style.top = touch.pageY + 'px';

    app.appendChild(electricDiv);

    sendTouchCoordinates('userId', touch.pageX, touch.pageY);

    setTimeout(() => {
        electricDiv.remove();
    }, 500);
});

function listenForTouches() {
    db.collection("touches").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
            const { x, y } = doc.data();
          
            const electricDiv = document.createElement('div');
            electricDiv.classList.add('electric');
            electricDiv.style.left = x + 'px';
            electricDiv.style.top = y + 'px';

            app.appendChild(electricDiv);

            setTimeout(() => {
                electricDiv.remove();
            }, 500);
        });
    });
}

listenForTouches();

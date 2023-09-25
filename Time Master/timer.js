const timerDiv = document.createElement("div");
timerDiv.id = "timer-extension";
timerDiv.style.position = "fixed";
timerDiv.style.top = "10px";
timerDiv.style.right = "10px";
timerDiv.style.width = "100px"; // Adjust the width as needed
timerDiv.style.height = "50px"; // Adjust the height as needed
timerDiv.style.backgroundColor = "#FF5733"; // Attractive color
timerDiv.style.color = "#FFF";
timerDiv.style.zIndex = "9999";
timerDiv.style.cursor = "move";
timerDiv.draggable = true;
timerDiv.style.borderRadius = "10px"; // Rounded corners
timerDiv.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)"; // Slight shadow
timerDiv.style.display = "flex"; // Flex container
timerDiv.style.justifyContent = "center"; // Center horizontally
timerDiv.style.alignItems = "center"; // Center vertically
timerDiv.style.fontWeight = "bold"; // Bold text
timerDiv.style.fontSize = "16px"; // Font size
timerDiv.style.userSelect = "none"; // Prevent text selection
document.body.appendChild(timerDiv);

let seconds = 0;
let timerInterval;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateTimer() {
    timerDiv.innerText = `⏳ ${formatTime(seconds)}`;
}

timerDiv.addEventListener("mousedown", (e) => {
    let offsetX = e.clientX - timerDiv.getBoundingClientRect().left;
    let offsetY = e.clientY - timerDiv.getBoundingClientRect().top;

    function onMouseMove(e) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        timerDiv.style.left = `${newX}px`;
        timerDiv.style.top = `${newY}px`;
    }

    document.addEventListener("mousemove", onMouseMove);

    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onMouseMove);
    });
});

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
}

startTimer();
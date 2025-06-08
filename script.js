function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById('clock').textContent = time;
}
setInterval(updateClock, 1000);
updateClock();
#date {
  color: blue;
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 10px;
  text-align: center;
}

function updateClock() {
  const now = new Date();

  // Oras (hh:mm:ss AM/PM)
  const time = now.toLocaleTimeString();
  document.getElementById('clock').textContent = time;

  // Petsa (e.g. June 8, 2025)
  const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString(undefined, optionsDate);
  document.getElementById('date').textContent = date;

  // Araw (e.g. Monday)
  const optionsDay = { weekday: 'long' };
  const day = now.toLocaleDateString(undefined, optionsDay);
  document.getElementById('day').textContent = day;
}

setInterval(updateClock, 1000);
updateClock();

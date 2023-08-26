document.addEventListener("DOMContentLoaded", () => {
  const counterElement = document.getElementById("counter");

  const updateCounter = () => {
      const currentTime = new Date();
      const year2000 = new Date("2000-01-01");
      const timeDiff = currentTime - year2000;
      const minutes = Math.floor(timeDiff / (1000 * 60));

      counterElement.textContent = minutes.toLocaleString();
  }

  updateCounter();
  setInterval(updateCounter, 60000);
});

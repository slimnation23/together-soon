const container = document.querySelector("#container");
const targetDate = new Date("2025-06-20T00:00:00").getTime();

function countdown(date) {
  const interval = setInterval(() => {
    const now = Date.now();
    const finalDate = date - now;
    if (finalDate < 0) {
      clearInterval(interval);
      container.textContent = "Finish";
    }
    const days = Math.floor(finalDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor((finalDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((finalDate % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((finalDate % (1000 * 60)) / 1000);

    container.innerHTML = `
      <div>${days} <span class="text-sm">days</span></div> 
      <div>${hours} <span class="text-sm">hours</span> </div>
      <div>${minutes} <span class="text-sm">minutes</span> </div>
      <div>${seconds} <span class="text-sm">seconds</span></div>
    `;
  }, 1000);
}

countdown(targetDate);
const container = document.querySelector('#container');
const result = document.querySelector('#result');
const targetDate = new Date('2026-07-12T07:00:00').getTime();

function updateCountdown() {
  const now = Date.now();
  const finalDate = targetDate - now;

  if (finalDate <= 0) {
    result.innerHTML = `<div class="text-4xl text-center font-bold w-full py-10 scale-110 transition-transform">Together Now! 🎉</div>`;
    return true; // Таймер завершено
  }

  const days = Math.floor(finalDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor((finalDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((finalDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((finalDate % (1000 * 60)) / 1000);

  container.innerHTML = `
    <div class="flex flex-col items-center">
      <span class="text-5xl font-black">${days}</span>
      <span class="text-sm uppercase tracking-widest opacity-70">days</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="text-5xl font-black">${hours.toString().padStart(2, '0')}</span>
      <span class="text-sm uppercase tracking-widest opacity-70">hours</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="text-5xl font-black">${minutes.toString().padStart(2, '0')}</span>
      <span class="text-sm uppercase tracking-widest opacity-70">mins</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="text-5xl font-black text-rose-500 animate-pulse">${seconds.toString().padStart(2, '0')}</span>
      <span class="text-sm uppercase tracking-widest opacity-70">secs</span>
    </div>
  `;
  return false;
}

// Початковий запуск без затримки
if (!updateCountdown()) {
  const interval = setInterval(() => {
    if (updateCountdown()) {
      clearInterval(interval);
    }
  }, 1000);
}

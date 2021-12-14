const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  const secondsDegress = (seconds / 60) * 360;
  const minsDegress = (mins / 60) * 360;
  const hoursDegress = (hours / 12) * 360;
  secondHand.style.transform = `rotate(${secondsDegress}deg)`;
  minHand.style.transform = `rotate(${minsDegress}deg)`;
  hourHand.style.transform = `rotate(${hoursDegress}deg)`;
}
setDate();
setInterval(setDate, 1000);

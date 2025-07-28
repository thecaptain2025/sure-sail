
function calculateScore() {
  const sliders = document.querySelectorAll('.score');
  let total = 0;
  sliders.forEach(slider => {
    total += parseInt(slider.value);
  });
  let tier = "⚫ Conch-Cursed";
  if (total >= 90) tier = "🟩 Verdant Sail";
  else if (total >= 60) tier = "🟨 Weathered Mast";
  else if (total >= 30) tier = "🟥 False Hull";

  document.getElementById("score-output").innerHTML = 
    `Final Score: ${total} / 100<br><strong>${tier}</strong>`;
}

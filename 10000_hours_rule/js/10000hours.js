// js file

document.getElementById("startButton").addEventListener("click", function () {
  let goal = document.getElementById("goal").value;
  let hours = parseInt(document.getElementById("hours").value);
  let resultText = document.getElementById("resultText");
  let resultSection = document.querySelector(".result");
  let loadingSection = document.querySelector(".result_loading");

  if (!goal || isNaN(hours) || hours <= 0) {
    alert("올바른 값을 입력하세요!");
    return;
  }

  let totalDays = Math.ceil(10000 / hours);
  loadingSection.style.display = "block";
  resultSection.style.display = "none";

  setTimeout(() => {
    loadingSection.style.display = "none";
    resultText.innerHTML = `목표: <strong>${goal}</strong><br> 하루 ${hours}시간씩 연습하면 약 <strong>${totalDays}일</strong>이 걸립니다!`;
    resultSection.style.display = "block";
  }, 2000);
});
document.getElementById("quiz")?.addEventListener("submit", function(e) {
  e.preventDefault();

  let score = 0;
  let data = new FormData(this);

  data.forEach(val => {
    if (val === "no") score++;
  });

  let result = score >= 2 ? "HIGH RISK" : "LOW RISK";

  document.getElementById("result").innerText = result;

  // Save risk level to hidden field
  document.getElementById("risk_level").value = result;

  // Submit form after calculation
  setTimeout(() => {
    e.target.submit();
  }, 1000);
});
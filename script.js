function openWhatsApp() {
  window.open("https://wa.me/905555555555?text=Merhaba%20araba%20kiralamak%20istiyorum", "_blank");
}
function toggleForm() {
  const form = document.getElementById("workForm");
  form.style.display = form.style.display === "block" ? "none" : "block";
}
function submitForm(e) {
  e.preventDefault();
  alert("Başvurunuz alındı, teşekkürler!");
  document.getElementById("workForm").style.display = "none";
}

window.addEventListener("load", function () {
   const emailInput = document.getElementById("myEmail");
   const emailLabel = document.getElementById("emailBox");

   if (!emailInput || !emailLabel) {
      console.log("Email elements not found");
      return;
   }

   emailInput.onmouseover = function () {
      emailLabel.textContent = "Email: Please enter a valid email address";
   };

   emailInput.onmouseout = function () {
      emailLabel.textContent = "Email:";
   };
});
// public/js/app.js
document.addEventListener("DOMContentLoaded", function () {
   const btns = document.querySelectorAll("button");

   btns.forEach(btn => {
      btn.addEventListener("click", () => {
         console.log("Button is clicked");
      });
   });
});

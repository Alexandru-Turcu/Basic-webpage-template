scrollToElement = (el, ms) => {
  let speed = ms ? ms : 600;
  $("html,body").animate(
    {
      scrollTop: $(el).offset().top - 50,
    },
    speed
  );
};

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);

// $(document).ready(function () {
//   $("#loginModal").modal("show");
//   $(function () {
//     $('[data-toggle="tooltip"]').tooltip();
//   });
// });

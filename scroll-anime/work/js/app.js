document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("displayed");
      }
    });
  }, {
    threshold: 0.5,
  });

  document.querySelectorAll(".scroll-in").
    forEach((box) => {
      observer.observe(box);
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".flip-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
      }
    });
  }, {
    threshold: 0.5,
  });

  targets.forEach((target) => {
    observer.observe(target);
  });
});

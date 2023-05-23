const menuToggle = document.querySelector(".menu-bars");
const nav = document.querySelector("nav ul");
const the_animation = document.querySelectorAll(".about p");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("about_animation");
      } else {
        entry.target.classList.remove("about_animation");
      }
    });
  },
  { threshold: 0.5 }
);
for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];
  observer.observe(elements);
}

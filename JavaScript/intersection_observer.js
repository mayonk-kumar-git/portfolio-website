const projects = document.getElementsByClassName("prj");
const sections = document.querySelectorAll("section");

const observedElems = [...sections, ...projects];

console.log(observedElems);

const AnimationOnScrollOptions = {
  threshold: 0.1,
};

const AnimationOnScroll = new IntersectionObserver(
  (entries, AnimationOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        AnimationOnScroll.unobserve(entry.target);
      }
    });
  },
  AnimationOnScrollOptions
);

observedElems.forEach((elem) => {
  AnimationOnScroll.observe(elem);
});

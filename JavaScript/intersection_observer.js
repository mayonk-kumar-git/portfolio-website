const projects = document.getElementsByClassName("prj");
const heroSection = document.getElementById("hero_section_Id")
const aboutSection = document.getElementById("about_section_Id")
const skillsSection = document.getElementById("skill_section_Id")
const servicesSection = document.getElementById("services_section_Id")
const contactSection = document.getElementById("contact_section_Id")

const observedElems = [...projects, heroSection, aboutSection, skillsSection, servicesSection, contactSection];

console.log(observedElems);

const AnimationOnScrollOptions = {
  threshold: 0.5,
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

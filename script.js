/*
  MONISHA PK PORTFOLIO — EDITABLE SETTINGS
  1) Update socialLinks below with your official profile URLs.
  2) Update each project's links if you have a confirmed case study / business profile.
  3) Place your portrait at assets/profile.jpg and your PDF at assets/resume.pdf.
*/
const socialLinks = {
  linkedin: "https://www.linkedin.com/in/monishapk",
  facebook: "", // Add your official Facebook profile URL.
  github: ""    // Add your official GitHub profile URL.
};

const projects = [
  {name:"RelyCred", monogram:"RC", categories:["SMO","Meta Ads"], description:"Social media optimization and digital presence support for a finance-focused brand.", links:[{label:"Facebook Page",url:"https://www.facebook.com/profile.php?id=61592578922279&rdid=rXX0N11SD9uuAgIG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Dk8Y9cqZD%2F"}], colors:["#6f35d5","#f16d9e"]},
  {name:"SRT Global Service", monogram:"SRT", categories:["SMO"], description:"Social media presence and content support for a global services business.", links:[{label:"Facebook Page",url:"https://www.facebook.com/srtGlobalServices"}], colors:["#2458b7","#45e0da"]},
  {name:"Leaf Medical Centre", monogram:"LEAF", categories:["Website Development"], description:"Website design and digital presence for a medical centre.", links:[{label:"Visit Website",url:"https://leafmedicalcentre.com/"}], colors:["#1b906e","#72e2b6"]},
  {name:"myG International", monogram:"myG", categories:["SEO"], description:"SEO work for an electronics and technology retail website serving Bahrain.", links:[{label:"Visit Website",url:"https://myginternational.com/"}], colors:["#1d70d6","#45e7ee"]},
  {name:"Zoom Cabs", monogram:"ZC", categories:["SEO"], description:"Search optimization support for a cab and travel service website.", links:[{label:"Visit Website",url:"https://zoomcabs.in/"}], colors:["#e08c22","#ffcf62"]},
  {name:"Vedha Wellness", monogram:"VW", categories:["Graphic Design"], description:"Poster design portfolio item. Add the approved artwork and case-study link when available.", links:[{label:"Project details coming soon",url:""}], colors:["#8e49bf","#f18cb7"], placeholder:true},
  {name:"Zyroquip", monogram:"ZQ", categories:["Graphic Design"], description:"E-brochure design preview. Add the approved brochure URL or project case study.", links:[{label:"Project details coming soon",url:""}], colors:["#176d88","#8ae9f0"], placeholder:true},
  {name:"Athinus", monogram:"ATH", categories:["Website Development"], description:"Website creation and digital presentation for Athinus.", links:[{label:"Visit Website",url:"https://athinus.in/"}], colors:["#4d40b8","#9e8dff"]},
  {name:"Golden Wings", monogram:"GW", categories:["SMO","Meta Ads"], description:"Social media optimization and marketing support for a consultancy brand.", links:[{label:"Facebook Page",url:"https://www.facebook.com/goldenwings.consultants"}], colors:["#b77a22","#ffe08a"]},
  {name:"Nature Abode Resort", monogram:"NA", categories:["Website Development"], description:"Website creation for a resort and hospitality business.", links:[{label:"Visit Website",url:"https://natureaboderesort.com/"}], colors:["#28734a","#a0d87a"]},
  {name:"Noretsa Pharma", monogram:"NP", categories:["Website Development"], description:"Website creation for a pharmaceutical and healthcare business.", links:[{label:"Visit Website",url:"https://noretsapharma.com/"}], colors:["#2669b7","#73d7ef"]},
  {name:"Bros Tours & Travels", monogram:"BROS", categories:["SEO"], description:"SEO support for a tours and travel service website.", links:[{label:"Visit Website",url:"https://brostourstravels.com/"}], colors:["#bb5d27","#f8b56d"]},
  {name:"MarkoSeries", monogram:"MS", categories:["SMO","Meta Ads"], description:"Social media marketing and optimization for solar, inverter and UPS services.", links:[{label:"Facebook Page",url:"https://www.facebook.com/markoseries.pvt.ltd"}], colors:["#276b7b","#61dbe7"]},
  {name:"WeOne Comfort", monogram:"W1", categories:["Website Development"], description:"Website design and digital presence for a comfort and services brand.", links:[{label:"Visit Website",url:"https://weonecomfort.com/"}], colors:["#8c4cc4","#f18cc5"]},
  {name:"AquaGuard Calicut", monogram:"AG", categories:["Google Business Profile"], description:"Google Business Profile case study. Add the confirmed business profile or Maps link.", links:[{label:"Profile link coming soon",url:""}], colors:["#167cb4","#59d9ef"], placeholder:true},
  {name:"Aashiana Plantation", monogram:"AP", categories:["Google Business Profile"], description:"Local business profile optimization. Add the confirmed business profile or case-study URL.", links:[{label:"Profile link coming soon",url:""}], colors:["#487b3a","#b3dd72"], placeholder:true},
  {name:"Vogue Beauty Parlour", monogram:"VB", categories:["Website Development"], description:"Website design for a beauty and personal care business.", links:[{label:"Visit Website",url:"https://voguebeautyparlour.com/"}], colors:["#a43d7b","#ff8dc8"]},
  {name:"Microsurvey Digital Land Survey", monogram:"MD", categories:["Google Business Profile"], description:"Local business visibility project. Add the verified Maps profile or case-study link.", links:[{label:"Profile link coming soon",url:""}], colors:["#3e5db0","#8aa9ff"], placeholder:true},
  {name:"Optimist Laptop Service", monogram:"OLS", categories:["Website Development","Google Business Profile"], description:"Website creation and local business profile support for a laptop service provider.", links:[{label:"Visit Website",url:"https://optimistlaptopservice.com/"},{label:"Google Business Profile link coming soon",url:""}], colors:["#4852a8","#66d7f0"], placeholder:true}
];

const projectGrid = document.querySelector("#project-grid");
const filterButtons = [...document.querySelectorAll(".filter-btn")];

function safeExternalUrl(url) {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch { return false; }
}

function renderProjects(filter = "All") {
  const visible = projects.filter(project => filter === "All" || project.categories.includes(filter));
  projectGrid.innerHTML = visible.map((project, index) => {
    const links = project.links.map(link => {
      if (safeExternalUrl(link.url)) {
        return `<a class="project-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} <span aria-hidden="true">↗</span></a>`;
      }
      return `<span class="project-link disabled" title="Add a verified URL in script.js">${link.label}</span>`;
    }).join("");
    const primaryCategory = project.categories[0];
    return `<article class="project-card" style="--art-a:${project.colors[0]};--art-b:${project.colors[1]};animation-delay:${Math.min(index * 35, 210)}ms">
      <div class="project-art" aria-hidden="true"><span class="project-monogram">${project.monogram}</span><span class="art-caption">${project.categories.join(" · ")}</span></div>
      <div class="project-body"><div class="project-meta"><span class="category-label">${primaryCategory}</span><span class="project-number">${String(projects.indexOf(project)+1).padStart(2,"0")} / 19</span></div>
      <h3>${project.name}</h3><p>${project.description}</p><div class="project-actions">${links}</div></div></article>`;
  }).join("");
  if (!visible.length) projectGrid.innerHTML = '<p class="muted">No projects found in this category yet.</p>';
}

filterButtons.forEach(button => button.addEventListener("click", () => {
  filterButtons.forEach(item => { item.classList.remove("active"); item.setAttribute("aria-pressed", "false"); });
  button.classList.add("active");
  button.setAttribute("aria-pressed", "true");
  renderProjects(button.dataset.filter);
}));
renderProjects();

// Social URLs are configurable. Unconfigured links are disabled rather than pointing to fake profiles.
document.querySelectorAll("[data-config-link]").forEach(link => {
  const key = link.dataset.configLink;
  const url = socialLinks[key];
  if (safeExternalUrl(url)) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#contact";
    link.title = `Add your official ${key} URL in script.js`;
    link.setAttribute("aria-label", `${key} profile not configured; edit script.js to add link`);
    link.addEventListener("click", event => {
      event.preventDefault();
      document.querySelector("#contact").scrollIntoView({behavior:"smooth"});
      document.querySelector("#form-note").textContent = `To enable your ${key} icon, add the official profile URL in the socialLinks object in script.js.`;
    });
  }
});

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navLinks.classList.remove("open");
}
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open navigation menu" : "Close navigation menu");
  navLinks.classList.toggle("open", !expanded);
});
document.querySelectorAll(".nav-link, .brand, .scroll-cue").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });

// Reveal-on-scroll with a no-JS / reduced-motion friendly fallback.
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  }), {threshold: 0.12});
  revealElements.forEach(element => revealObserver.observe(element));
} else revealElements.forEach(element => element.classList.add("is-visible"));

// Animated role text
const roles = ["a Digital Marketing Executive", "an SEO Specialist", "a Graphic Designer", "a WordPress Developer"];
const typedRole = document.querySelector(".typed-role");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reducedMotion) {
  let roleIndex = 0, charIndex = roles[0].length, deleting = true;
  function typeRole() {
    const current = roles[roleIndex];
    if (deleting) {
      charIndex--;
      typedRole.textContent = current.slice(0, Math.max(charIndex, 0));
      if (charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 300);
        return;
      }
      setTimeout(typeRole, 35);
    } else {
      const next = roles[roleIndex];
      charIndex++;
      typedRole.textContent = next.slice(0, charIndex);
      if (charIndex >= next.length) {
        deleting = true;
        setTimeout(typeRole, 1750);
        return;
      }
      setTimeout(typeRole, 65);
    }
  }
  setTimeout(typeRole, 1800);
}

// Contact form: validates locally, then opens a prefilled email draft. No fake send-success message.
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const name = String(data.get("name")).trim();
  const email = String(data.get("email")).trim();
  const subject = String(data.get("subject")).trim();
  const message = String(data.get("message")).trim();
  const body = `Name: ${name}\nReply email: ${email}\n\n${message}`;
  const mailto = `mailto:monishapk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formNote.textContent = "Your email app should open with this message ready to review. Press Send in your email app to send it.";
  window.location.href = mailto;
});

// Back-to-top and active section navigation
const backToTop = document.querySelector("#back-to-top");
window.addEventListener("scroll", () => backToTop.classList.toggle("visible", window.scrollY > 600), {passive:true});
backToTop.addEventListener("click", () => window.scrollTo({top:0, behavior:reducedMotion ? "auto" : "smooth"}));

const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  }), {rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(section => sectionObserver.observe(section));
}

// Graceful profile-photo fallback.
const profilePhoto = document.querySelector(".profile-photo");
profilePhoto.addEventListener("error", () => {
  profilePhoto.hidden = true;
  document.querySelector(".photo-fallback").hidden = false;
});

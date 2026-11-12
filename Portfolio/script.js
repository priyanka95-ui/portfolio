// Footer year
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Highlight the nav link for the section currently in view
var links = document.querySelectorAll("nav a[href^='#']");
var sections = Array.prototype.map.call(links, function (a) {
  return document.querySelector(a.getAttribute("href"));
});

if ("IntersectionObserver" in window) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(function (s) { if (s) observer.observe(s); });
}

// Filter featured work by topic
var buttons = document.querySelectorAll(".filters button");
var clips = document.querySelectorAll(".clip");
buttons.forEach(function (b) {
  b.addEventListener("click", function () {
    var f = b.getAttribute("data-filter");
    buttons.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
    clips.forEach(function (c) { c.hidden = !(f === "all" || c.getAttribute("data-cat") === f); });
  });
});
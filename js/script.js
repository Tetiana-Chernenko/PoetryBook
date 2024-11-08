console.log("Hello world!");

const myName = "TC-Dev";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn--pageup").style.display = "block";
  } else {
    document.getElementById("btn--pageup").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to ohter links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    // if (link.classList.contains("main-nav-link"))
    //   headerEl.classList.toggle("nav-open");
  });
});

// Close mobile navigation
const navigationLinks = document.querySelectorAll(".navigation__link");

function closeNavigation() {
  const navigationCheckbox = document.querySelector(".navigation__checkbox");
  if (navigationCheckbox.checked) {
    navigationCheckbox.checked = false;
  }
}

navigationLinks.forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// select which book will be displayed
document.addEventListener("DOMContentLoaded", function () {
  function loadContent(url) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("content-section").innerHTML = data;
      })
      .catch((error) => console.error("Error fetching content:", error));
  }

  document
    .getElementById("cover-book-1")
    .addEventListener("click", function () {
      loadContent("book1.html");
    });

  document
    .getElementById("cover-book-2")
    .addEventListener("click", function () {
      loadContent("book2.html");
    });

  // Загружаем контент первой книги по умолчанию
  loadContent("book1.html");
});

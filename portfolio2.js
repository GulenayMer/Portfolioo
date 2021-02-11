const toggleBtn = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".nav");

const navLinks = document.querySelectorAll('.nav-link')
const about = document.getElementById("about");


toggleBtn.addEventListener("click", () => {
    // if (navbar.classList.contains("show-sidebar")) {
    //   navbar.classList.remove("show-sidebar");
    // } else {
    //   navbar.classList.add("show-sidebar");
    // }
    //navbar.classList.toggle("nav-open");
    document.body.classList.toggle("nav-open");
  });


 

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    })
});



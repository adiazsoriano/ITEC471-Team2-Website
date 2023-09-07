let bootstrapCSS = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">';
let bootstrapJS = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>';
let navBar = `
<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
          <img src="images/favicon-color.png" alt="Bootstrap" width="30" height="24">
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="project-page/index.html">Project</a>
            </li> 
            <li class="nav-item">
                <a class="nav-link" href="tbutler31/index.html">Thomas Butler</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="adiazsoriano/index.html">Angel Diaz-Soriano</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="lhulan/index.html">Lukas Hulan</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="speck1/index.html">Andrew Peck</a>
            </li>
        </ul>
    </div>
</nav>
<div class="nav-spacer"></div>`;
function importBootstrap() {
    document.getElementById('bootstrap_css').innerHTML += bootstrapCSS;
    document.getElementById('bootstrap_js').innerHTML += bootstrapJS;
}

function constructNavBar() {
    document.getElementById('nav_bar').innerHTML += navBar;
}

importBootstrap();
constructNavBar();


/*
	Back to top button functionality
*/

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*
	End: back to top button
*/
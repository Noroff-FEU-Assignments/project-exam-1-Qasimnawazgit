 document.getElementsByTagName("header")[0].innerHTML = `  <div id="top-menu">
      <ul>
        <li>
          <div id="top-menu-icons">
            <i class="fas fa-map-marker-alt"></i>
            <a href="#">Oslo, Norway</a>
          </div>
        </li>
        <li>
          <div id="top-menu-icons">
            <i class="fas fa-phone-volume"></i>
            <a href="#">+123-456-789</a>
          </div>
        </li>
        <li>
          <div id="top-menu-icons">
            <i class="fas fa-envelope"></i>
            <a href="#">flower@xyz.com</a>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div id="top-menu-social-icons">
            <i class="fab fa-facebook-f"></i>
          </div>
        </li>
        <li>
          <div id="top-menu-social-icons">
            <i class="fab fa-twitter"></i>
          </div>
        </li>
        <li>
          <div id="top-menu-social-icons">
            <i class="fab fa-instagram"></i>
          </div>
        </li>
        <li>
          <div id="top-menu-social-icons">
            <i class="fab fa-linkedin"></i>
          </div>
        </li>
      </ul>
    </div>
    <div id="slideout-menu">
      <ul>
        <li>
          <a href="index.html"><i class="fa fa-home"></i> Home</a>
        </li>
        <li>
          <a href="blogslist.html">Blog</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <input type="text" placeholder="Search Here" />
          <br />
          <a href="#">
            <i class="fas fa-search"></i>
          </a>
        </li>
      </ul>
    </div>
    <nav>
      <div id="logo-img">
        <a href="#">
          <img src="img/site-icon.png" alt="Seed To Tree Logo" />
        </a>
      </div>
      <div id="menu-icon">
        <i class="fas fa-bars"></i>
      </div>
      <ul>
        <li>
          <a class="active" href="index.html"><i class="fa fa-home"></i> Home</a>
        </li>
        <li>
          <a href="blogslist.html">Blog</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <div id="search-icon">
            <i class="fas fa-search"></i>
          </div>
        </li>
      </ul>
    </nav>
    <div id="searchbox">
      <input type="text" placeholder="Search Here" />
    </div>`;
    
const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");
searchIcon.addEventListener("click", function () {
  if (searchBox.style.top == "10rem") {
    searchBox.style.top = "15rem";
    searchBox.style.pointerEvents = "none";
  } else {
    searchBox.style.top = "10rem";
    searchBox.style.pointerEvents = "auto";
  }
});

menuIcon.addEventListener("click", function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = "0";
    slideoutMenu.style.pointerEvents = "none";
  } else {
    slideoutMenu.style.opacity = "1";
    slideoutMenu.style.pointerEvents = "auto";
  }
});


 
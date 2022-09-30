var loginArea = document.getElementById("login-ct");
var registerArea = document.getElementById("register-ct");
var middleHr = document.getElementById("vert-hr");
var navbarRegisterButton = document.getElementById("navbar-register");
var navbarLoginButton = document.getElementById("navbar-login");
var container = document.getElementById("con-bg");

function registerClick() {
  if (
    window.location.href.indexOf("login") > -1 ||
    window.location.href.indexOf("register") > -1
  ) {
    if (loginArea.style.display == "none") {
    } else {
      middleHr.style.display = "";
      registerArea.style.display = "";
      loginArea.style.marginLeft = "24px";
      registerArea.style.marginRight = "24px";
      registerArea.style.marginLeft = "24px";
      setTimeout(() => {
        loginArea.style.display = "none";
        middleHr.style.display = "none";
        registerArea.style.marginLeft = "0px";
        loginArea.style.marginLeft = "0px";
        registerArea.style.marginRight = "0px";
      }, 500);
    }
  }
}
function loginClick() {
  if (
    window.location.href.indexOf("login") > -1 ||
    window.location.href.indexOf("register") > -1
  ) {
    if (registerArea.style.display == "none") {
    } else {
      middleHr.style.display = "";
      loginArea.style.display = "";
      loginArea.style.marginLeft = "24px";
      registerArea.style.marginRight = "24px";
      registerArea.style.marginLeft = "24px";
      setTimeout(() => {
        registerArea.style.display = "none";
        middleHr.style.display = "none";
        registerArea.style.marginLeft = "0px";
        loginArea.style.marginLeft = "0px";
        registerArea.style.marginRight = "0px";
      }, 500);
    }
  }
}
function logoClick() {
  window.open("/login.html", "_self");
}

var darkMode = localStorage.getItem("darkmode");

function darkLightClick() {
  if (localStorage.getItem("darkmode") == "off") {
    localStorage.setItem("darkmode", "on");
    theme.classList.remove("fa-moon");
    theme.classList.add("fa-sun");
    location.reload();
  } else if (localStorage.getItem("darkmode") == "on") {
    localStorage.setItem("darkmode", "off");
    theme.classList.add("fa-moon");
    theme.classList.remove("fa-sun");
    location.reload();
  }
}

function darkmodeChange() {
  if (darkMode == "off") {
    theme.classList.add("fa-moon");
    theme.classList.remove("fa-sun");
    document.documentElement.style.setProperty("--white", "#eeeeee");
    document.documentElement.style.setProperty("--lightwhite", "#ffffff");
    document.documentElement.style.setProperty("--gray", "#c2c2c2");
    document.documentElement.style.setProperty("--darkgray", "#353535");
    document.documentElement.style.setProperty("--lightblack", "#dddddd");
  } else if (darkMode == "on") {
    theme.classList.remove("fa-moon");
    theme.classList.add("fa-sun");
    document.documentElement.style.setProperty("--white", "#101010");
    document.documentElement.style.setProperty("--lightwhite", "#000000");
    document.documentElement.style.setProperty("--gray", "#353535");
    document.documentElement.style.setProperty("--darkgray", "#c2c2c2");
    document.documentElement.style.setProperty("--lightblack", "#292929");
  }
}

function search() {
  var x = document.getElementById("searchbar").value;
  if (x == "") {
    alert("Please enter your question.");
  } else {
    window.open("https://www.google.com/search?q=" + x);
  }
}

function gmail() {
  if (confirm("Are you sure to open gmail?")) {
    window.open(
      "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
      "_blank"
    );
  }
}

function changeColor() {
  var change = document.getElementById("searchInput");
  change.style.border = "1px solid rgb(0, 132, 255)";
}

function onSuccess(googleUser) {
  console.log("Logged in as: " + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
  console.log(error);
}
function renderButton() {
  gapi.signin2.render("my-signin2", {
    scope: "profile email",
    width: 180,
    height: 25,
    longtitle: true,
    theme: "dark",
    onsuccess: onSuccess,
    onfailure: onFailure,
  });
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function blog() {
  alert("blog is coming soon");
}

// preloder 

var loader;
function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.06);
    }, 100);
  }
}

function displayContent() {
  loader.style.display = "none";
  document.getElementById("content").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  loader = document.getElementById("loader");
  loadNow(1.9);
});

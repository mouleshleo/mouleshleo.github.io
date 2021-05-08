function search() {
  var x = document.getElementById("searchbar").value;
  if (x == "") {
    alert("Please enter your name.");
  } else {
    alert(
      "Hi " +
        x +
        ",\r\n" +
        "this page is created for fun. more features are coming soon.\r\n-By Moulesh."
    );
  }
}

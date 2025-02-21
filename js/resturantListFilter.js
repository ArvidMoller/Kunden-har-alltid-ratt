function filter() {
  // Declare local variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("locationSearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("locations");
  li = ul.getElementsByClassName("city");

  // Filter out locations with the wrong letters
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
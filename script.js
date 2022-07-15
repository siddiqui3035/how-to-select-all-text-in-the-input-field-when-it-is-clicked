let demoInp = document.getElementById("demo-inp");
demoInp.addEventListener("click", function () {
  this.setSelectionRange(0, this.value.length);
});
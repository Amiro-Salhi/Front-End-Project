function openForm() {
  console.log("Form geopend");
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Goedemorgen";
} else if (time < 18) {
  greeting = "Goedemiddag";
} else {
  greeting = "Goedenavond";
}
document.getElementById("demo2").innerHTML = greeting;

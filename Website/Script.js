function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Set the date we're counting down to
var countDownDate = new Date("Sep 7, 2027 17:45:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function openForm() {
  // 1. Show the chat popup window
  document.getElementById("myForm").style.display = "block"; 
  
  // 2. Hide the main chat button so it doesn't overlap
  document.querySelector(".open-button").style.display = "none";
}

function closeForm() {
  // 1. Hide the chat popup window
  document.getElementById("myForm").style.display = "none";
  
  // 2. Bring back the main chat button cleanly
  document.querySelector(".open-button").style.display = "block";
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


// 1. Grab the button and the body elements from the DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// 2. Check localStorage when the page loads to see if they chose dark mode before
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  bodyElement.classList.add('dark-theme');
  themeToggleBtn.textContent = 'Switch to Light Mode';
}

// 3. Add an event listener to handle the click event
themeToggleBtn.addEventListener('click', () => {
  // Toggle the class on the body
  bodyElement.classList.toggle('dark-theme');
  
  // Check if the body now has the dark theme active
  if (bodyElement.classList.contains('dark-theme')) {
    // Save preference to localStorage and update button text
    localStorage.setItem('theme', 'dark');
    themeToggleBtn.textContent = 'Switch to Light Mode';
  } else {
    // Remove preference from localStorage and update button text
    localStorage.setItem('theme', 'light');
    themeToggleBtn.textContent = 'Switch to Dark Mode';
  }
});

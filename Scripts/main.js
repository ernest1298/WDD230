
// footer
let week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
let date = new Date();
let weekname = week_names[date.getDay()];
let monthname = month_names[date.getMonth()];

const dateoutput = document.querySelector('#currentdate');

dateoutput.textContent = "Updated: " + weekname + ", " + date.getDate() + " " + monthname + " " + date.getFullYear();
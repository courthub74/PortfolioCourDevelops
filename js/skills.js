// query the front buttons

// HTML Button
let html_button = document.getElementById('html_skill');

// HTML Logo
let html_logo = document.getElementById('html');

// HTML Description
let html_description = document.getElementById('html_description');

// hover over
html_button.addEventListener('mouseover', function() {
    html_logo.classList.add('dissapear');
    html_description.classList.add('show');
});

// hover out
html_button.addEventListener('mouseout', function() {
    html_logo.classList.remove('dissapear');
    html_description.classList.remove('show');
});
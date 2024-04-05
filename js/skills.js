// query the front buttons

//HTML/////////////////////////////////////////////////////////////

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

//CSS////////////////////////////////////////////////////////////////

// CSS Button
let css_button = document.getElementById('css_skill');

// CSS Logo
let css_logo = document.getElementById('css');

// CSS Description
let css_description = document.getElementById('css_description');

// hover over
css_button.addEventListener('mouseover', function() {
    css_logo.classList.add('dissapear');
    css_description.classList.add('show');
});

// hover out
css_button.addEventListener('mouseout', function() {
    css_logo.classList.remove('dissapear');
    css_description.classList.remove('show');
});
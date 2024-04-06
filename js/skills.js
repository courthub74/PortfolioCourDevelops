// query the front buttons

//HTML/////////////////////////////////////////////////////////////

// HTML Button
let html_button = document.getElementById('html_skill');

// HTML Logo
let html_logo = document.getElementById('html');

// HTML Description
let html_description = document.getElementById('html_description');

// hover over for Desktop
html_button.addEventListener('mouseover', function() {
    html_logo.classList.add('dissapear');
    html_description.classList.add('show');
});

// hover out for Desktop
html_button.addEventListener('mouseout', function() {
    html_logo.classList.remove('dissapear');
    html_description.classList.remove('show');
});

// pointerdown for Touchscreens
html_button.addEventListener('pointerdown', e => {
    console.log(e);
    html_logo.classList.add('dissapear');
    html_description.classList.add('show');
    // Timed Reset for Touchscreens
    function reverse_html() {
        html_logo.classList.remove('dissapear');
        html_description.classList.remove('show');
    }
    setTimeout(reverse_html, 3000);
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

// pointerdown for Touchscreens
css_button.addEventListener('pointerdown', e => {
    console.log(e);
    css_logo.classList.add('dissapear');
    css_description.classList.add('show');
    function reverse_css() {
        css_logo.classList.remove('dissapear');
        css_description.classList.remove('show');
    }
    setTimeout(reverse_css, 3000);
});

//SASS//////////////////////////////////////////////////////////////

// SASS Button
let sass_button = document.getElementById('sass_skill');

// CSS Logo
let sass_logo = document.getElementById('sass');

// CSS Description
let sass_description = document.getElementById('sass_description');

// hover over
sass_button.addEventListener('mouseover', function() {
    sass_logo.classList.add('dissapear');
    sass_description.classList.add('show');
});

// hover out
sass_button.addEventListener('mouseout', function() {
    sass_logo.classList.remove('dissapear');
    sass_description.classList.remove('show');
});

// pointerdown for Touchscreens
sass_button.addEventListener('pointerdown', e => {
    console.log(e);
    sass_logo.classList.add('dissapear');
    sass_description.classList.add('show');
    function reverse_sass() {
        sass_logo.classList.remove('dissapear');
        sass_description.classList.remove('show');
    }
    setTimeout(reverse_sass, 3000);
});

//JAVASCRIPT///////////////////////////////////////////////////////

// JAVASCRIPT Button
let js_button = document.getElementById('js_skill');

// JAVASCRIPT Logo
let js_logo = document.getElementById('javascript');

// JAVASCRIPT Description
let js_description = document.getElementById('javascript_description');

// hover over
js_button.addEventListener('mouseover', function() {
    js_logo.classList.add('dissapear');
    js_description.classList.add('show');
});

// hover out
js_button.addEventListener('mouseout', function() {
    js_logo.classList.remove('dissapear');
    js_description.classList.remove('show');
});

// pointerdown for Touchscreens
js_button.addEventListener('pointerdown', () => {
    js_logo.classList.add('dissapear');
    js_description.classList.add('show');
    function reverse_js() {
        js_logo.classList.remove('dissapear');
        js_description.classList.remove('show');
    }
    setTimeout(reverse_js, 3000);
});

//PYTHON///////////////////////////////////////////////////////////////

// PYTHON Button
let py_button = document.getElementById('python_skill');

// PYTHON Logo
let py_logo = document.getElementById('python');

// PYTHON Description
let py_description = document.getElementById('python_description');

// hover over
py_button.addEventListener('mouseover', function() {
    py_logo.classList.add('dissapear');
    py_description.classList.add('show');
});

// hover out
py_button.addEventListener('mouseout', function() {
    py_logo.classList.remove('dissapear');
    py_description.classList.remove('show');
});

// pointerdown for Touchscreens
py_button.addEventListener('pointerdown', () => {
    py_logo.classList.add('dissapear');
    py_description.classList.add('show');
    function reverse_py() {
        py_logo.classList.remove('dissapear');
        py_description.classList.remove('show');
    }
});
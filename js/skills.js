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
    setTimeout(reverse_py, 3000);
});

//REACT///////////////////////////////////////////////////////////

// REACT Button
let react_button = document.getElementById('react_skill');

// REACT Logo
let react_logo = document.getElementById('react');

// REACT Description
let react_description = document.getElementById('react_description');

// hover over
react_button.addEventListener('mouseover', function() {
    react_logo.classList.add('dissapear');
    react_description.classList.add('show');
});

// hover out
react_button.addEventListener('mouseout', function() {
    react_logo.classList.remove('dissapear');
    react_description.classList.remove('show');
});

// pointerdown for Touchscreens
react_button.addEventListener('pointerdown', () => {
    react_logo.classList.add('dissapear');
    react_description.classList.add('show');
    function reverse_react() {
        react_logo.classList.remove('dissapear');
        react_description.classList.remove('show');
    }
    setTimeout(reverse_react, 3000);
});

//FIGMA////////////////////////////////////////////////////////

// FIGMA Button
let figma_button = document.getElementById('figma_skill');

// FIGMA Logo
let figma_logo = document.getElementById('figma');

// FIGMA Description
let figma_description = document.getElementById('figma_description');

// hover over
figma_button.addEventListener('mouseover', function() {
    figma_logo.classList.add('dissapear');
    figma_description.classList.add('show');
});

// hover out
figma_button.addEventListener('mouseout', function() {
    figma_logo.classList.remove('dissapear');
    figma_description.classList.remove('show');
});

// pointerdown for Touchscreens
figma_button.addEventListener('pointerdown', () => {
    figma_logo.classList.add('dissapear');
    figma_description.classList.add('show');
    function reverse_figma() {
        figma_logo.classList.remove('dissapear');
        figma_description.classList.remove('show');
    }
    setTimeout(reverse_figma, 3000);
});

//FIREBASE///////////////////////////////////////////////////

// FIREBASE Button
let firebase_button = document.getElementById('firebase_skill');

// FIREBASE Logo
let firebase_logo = document.getElementById('firebase');

// FIREBASE Description
let firebase_description = document.getElementById('firebase_description');

// hover over
firebase_button.addEventListener('mouseover', function() {
    firebase_logo.classList.add('dissapear');
    firebase_description.classList.add('show');
});

// hover out
firebase_button.addEventListener('mouseout', function() {
    firebase_logo.classList.remove('dissapear');
    firebase_description.classList.remove('show');
});

// pointerdown for Touchscreens
firebase_button.addEventListener('pointerdown', () => {
    firebase_logo.classList.add('dissapear');
    firebase_description.classList.add('show');
    function reverse_firebase() {
        firebase_logo.classList.remove('dissapear');
        firebase_description.classList.remove('show');
    }
    setTimeout(reverse_firebase, 3000);
});

//MONGO///////////////////////////////////////////////////

// MONGO Button
let mongo_button = document.getElementById('mongo_skill');

// MONGO Logo
let mongo_logo = document.getElementById('mongo');

// MONGO Description
let mongo_description = document.getElementById('mongo_description');

// hover out
mongo_button.addEventListener('mouseout', function() {
    mongo_logo.classList.remove('dissapear');
    mongo_description.classList.remove('show');
});

// pointerdown for Touchscreens
mongo_button.addEventListener('pointerdown', () => {
    mongo_logo.classList.add('dissapear');
    mongo_description.classList.add('show');
    function reverse_mongo() {
        mongo_logo.classList.remove('dissapear');
        mongo_description.classList.remove('show');
    }
    setTimeout(reverse_mongo, 3000);
});


//DJANGO///////////////////////////////////////////////////

// MONGO Button
let django_button = document.getElementById('django_skill');

// MONGO Logo
let django_logo = document.getElementById('django');

// MONGO Description
let django_description = document.getElementById('django_description');

// hover out
django_button.addEventListener('mouseout', function() {
    django_logo.classList.remove('dissapear');
    django_description.classList.remove('show');
});

// pointerdown for Touchscreens
django_button.addEventListener('pointerdown', () => {
    django_logo.classList.add('dissapear');
    django_description.classList.add('show');
    function reverse_django() {
        django_logo.classList.remove('dissapear');
        django_description.classList.remove('show');
    }
    setTimeout(reverse_django, 3000);
});

//AWS///////////////////////////////////////////////////

// AWS Button
let aws_button = document.getElementById('aws_skill');

// AWS Logo
let aws_logo = document.getElementById('aws');

// AWS Description
let aws_description = document.getElementById('aws_description');

// hover out
aws_button.addEventListener('mouseout', function() {
    aws_logo.classList.remove('dissapear');
    aws_description.classList.remove('show');
});

// pointerdown for Touchscreens
aws_button.addEventListener('pointerdown', () => {
    aws_logo.classList.add('dissapear');
    aws_description.classList.add('show');
    function reverse_aws() {
        aws_logo.classList.remove('dissapear');
        aws_description.classList.remove('show');
    }
    setTimeout(reverse_aws, 3000);
});

//HEROKU///////////////////////////////////////////////////

// HEROKU Button
let heroku_button = document.getElementById('heroku_skill');

// HEROKU Logo
let heroku_logo = document.getElementById('heroku');

// HEROKU Description
let heroku_description = document.getElementById('heroku_description');

// hover out
heroku_button.addEventListener('mouseout', function() {
    heroku_logo.classList.remove('dissapear');
    heroku_description.classList.remove('show');
});

// pointerdown for Touchscreens
heroku_button.addEventListener('pointerdown', () => {
    heroku_logo.classList.add('dissapear');
    heroku_description.classList.add('show');
    function reverse_heroku() {
        heroku_logo.classList.remove('dissapear');
        heroku_description.classList.remove('show');
    }
    setTimeout(reverse_heroku, 3000);
});
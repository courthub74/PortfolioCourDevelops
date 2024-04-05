// Manip the DOM to:
    // Show exp_details upon:
        // hover of experience square

// query the square
    // to activate sequence
let job_1_square = document.getElementById('job_1');

// query the job description
    // to make dissapear
let job_1_description = document.getElementById('job_1_description');

// query the job deets
    // to make appear
let job_1_details = document.getElementById('exp_details_one');

// click or hover
job_1_square.addEventListener('mouseover', function() {
    // make job description dissapear
    // job_1_description.classList.add('dissapear');
    // make job deets appear
    job_1_details.classList.add('show');
    // function to reset it all
    // function job_1_reset() {

    // }
});

// remove when removing mouse
job_1_square.addEventListener('mouseout', function() { 
    job_1_details.classList.remove('show');
});

// query the square
    // to activate sequence
let job_2_square = document.getElementById('job_2');

// query the job description
    // to make dissapear
let job_2_description = document.getElementById('job_2_description');

// query the job deets
    // to make appear
let job_2_details = document.getElementById('exp_details_two');

// click or hover
job_2_square.addEventListener('mouseover', function() {
    // make job description dissapear
    // job_1_description.classList.add('dissapear');
    // make job deets appear
    job_2_details.classList.add('show');
    // function to reset it all
    // function job_1_reset() {

    // }
});

// remove when removing mouse
job_2_square.addEventListener('mouseout', function() { 
    job_2_details.classList.remove('show');
});

// query the square
    // to activate sequence
    let job_3_square = document.getElementById('job_3');

    // query the job description
        // to make dissapear
    let job_3_description = document.getElementById('job_3_description');
    
    // query the job deets
        // to make appear
    let job_3_details = document.getElementById('exp_details_three');

// click or hover
job_3_square.addEventListener('mouseover', function() {
    // make job description dissapear
    // job_1_description.classList.add('dissapear');
    // make job deets appear
    job_3_details.classList.add('show');
    // function to reset it all
    // function job_1_reset() {

    // }
});

// remove when removing mouse
job_3_square.addEventListener('mouseout', function() { 
    job_3_details.classList.remove('show');
});


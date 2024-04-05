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
job_1_square.addEventListener('hover', function() {
    // make job description dissapear
    // job_1_description.classList.add('dissapear');
    // make job deets appear
    job_1_details.classList.add('show');
    // function to reset it all
    // function job_1_reset() {

    // }
});


// Pop-Up Functionality
const popUpButton = document.getElementById('popUpButton');
const popUp = document.getElementById('popUp');
const closeButton = document.querySelector('.close');

popUpButton.addEventListener('click', () => {
    popUp.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popUp.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popUp) {
        popUp.style.display = 'none';
    }
});

// Job Form Submission
const jobForm = document.getElementById('job-form');
const jobListings = document.getElementById('job-listings');

jobForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');
    jobCard.innerHTML = `
        <img src="${image}" alt="Job Image">
        <h3>${title}</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button class="apply-button">Apply</button>
        <button class="save-button">Save</button>
    `;

    jobListings.appendChild(jobCard);
    jobForm.reset();
});
// (Optional) Add JavaScript functionality if needed.
// For example, you can add event listeners to the search button and perform a search operation.
// Here's a basic example:

const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
  const location = document.querySelector('.search-field:nth-child(1)').value;
  const interestedField = document.querySelector('.search-field:nth-child(2)').value;
  const experience = document.querySelector('.search-field:nth-child(3)').value;
  const salary = document.querySelector('.search-field:nth-child(4)').value;

  // Perform the search operation here with the collected values
  // You can send the search parameters to the server-side using AJAX or fetch API
  // For demonstration purposes, we won't implement the backend logic here.
});




// (Optional) Add JavaScript functionality if needed.
// For example, you can add event listeners to the "Apply Now" buttons for handling the application process.
// Here's a basic example:

const applyButtons = document.querySelectorAll('.apply-button');

applyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Replace this with the actual application process or redirect to an application page.
    alert('You have applied for the job!');
  });
});

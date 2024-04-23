// Get the modal
const modal = document.getElementById("booking-modal");

// Get the button that opens the modal
const bookButton = document.getElementById("book-button");

// Get the <span> element that closes the modal
const closeSpan = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
bookButton.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Handle form submission
const bookingForm = document.querySelector("#booking-modal form");
bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Perform booking logic (e.g., send data to server, update available/booked slots)
  console.log("Booking submitted:", name, email, phone);

  // Close the modal
  modal.style.display = "none";

  // Reset form fields
  bookingForm.reset();
});

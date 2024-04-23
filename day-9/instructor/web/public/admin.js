// Password protection
const password = "ABCD1234";
const enteredPassword = prompt(
  "Enter the password to access the admin dashboard:"
);

if (enteredPassword === password) {
  // Render the admin dashboard HTML
  document.addEventListener("DOMContentLoaded", function () {
    // Slot functionality
    const slotForm = document.getElementById("slot-form");
    const slotList = document.getElementById("slot-list");
    let slots = [];

    slotForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const slotDate = document.getElementById("slot-date").value;
      const slotTime = document.getElementById("slot-time").value;
      const slot = { date: slotDate, time: slotTime };
      slots.push(slot);
      renderSlots();
      slotForm.reset();
    });

    function renderSlots() {
      slotList.innerHTML = "";
      slots.forEach(function (slot, index) {
        const li = document.createElement("li");
        li.textContent = `${slot.date} - ${slot.time}`;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
          slots.splice(index, 1);
          renderSlots();
        });
        li.appendChild(deleteBtn);
        slotList.appendChild(li);
      });
    }

    // Booked slots functionality
    const bookingList = document.getElementById("booking-list");
    let bookings = [];

    function renderBookings() {
      bookingList.innerHTML = "";
      bookings.forEach(function (booking) {
        const li = document.createElement("li");
        li.textContent = `${booking.date} - ${booking.time} (${booking.name}, ${booking.email}, ${booking.phone})`;
        bookingList.appendChild(li);
      });
    }

    // Tab functionality
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabs = document.querySelectorAll(".tab");

    tabBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const tabId = btn.getAttribute("data-tab");
        tabBtns.forEach(function (btn) {
          btn.classList.remove("active");
        });
        tabs.forEach(function (tab) {
          tab.classList.remove("active");
        });
        btn.classList.add("active");
        document.getElementById(tabId).classList.add("active");
      });
    });

    // Dummy data for booked slots
    bookings = [
      {
        date: "2024-04-25",
        time: "09:00",
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
      },
      {
        date: "2024-04-26",
        time: "14:00",
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "0987654321",
      },
    ];
    renderBookings();
  });
} else {
  // Redirect to the root page or display an error message
  alert("Invalid password. Access denied.");
  window.location.href = "/"; // Redirect to the root page
}

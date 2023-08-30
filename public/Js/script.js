document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (name.trim() === "" || phone.trim() === "" || email.trim() === "") {
      alert("Please fill in all fields.");
    } else {
      // You can perform further actions here, such as sending the form data to a server.
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});

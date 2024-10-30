const form = document.getElementById("pegawaiForm");
const nameInput = document.getElementById("name");
const nikInput = document.getElementById("nik");
const alamatInput = document.getElementById("alamat");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const nikError = document.getElementById("nikError");
const alamatError = document.getElementById("alamatError");
const emailError = document.getElementById("emailError");

function validateField(input, errorElement) {
    if (input.value.trim() === "") {
        errorElement.style.display = "block";
        return false;
    } else {
        errorElement.style.display = "none";
        return true;
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const isNameValid = validateField(nameInput, nameError);
    const isNikValid = validateField(nikInput, nikError);
    const isAlamatValid = validateField(alamatInput, alamatError);
    const isEmailValid = validateField(emailInput, emailError);

    if (isNameValid && isNikValid && isAlamatValid && isEmailValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

nameInput.addEventListener("input", () => validateField(nameInput, nameError));
nikInput.addEventListener("input", () => validateField(nikInput, nikError));
alamatInput.addEventListener("input", () => validateField(alamatInput, alamatError));
emailInput.addEventListener("input", () => validateField(emailInput, emailError));
